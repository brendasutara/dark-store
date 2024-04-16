import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Categories from "../../Components/Categories";
import Header from "../../Components/Header";
import Layout from "../../Components/Layout";
import { Product } from "../../Models/Products";
import SecurePurchase from "../../Components/SecurePurchase";

function Home() {
  const [items, setItems] = useState<Product[]>([]);
  const [showAllProducts, setShowAllProducts] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          showAllProducts
            ? "https://api.escuelajs.co/api/v1/products"
            : "https://api.escuelajs.co/api/v1/products?offset=20&limit=8"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredData = data.filter((product: Product) => {
          return !product.images.some((image) => image.includes("any"));
        });
        setItems(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [showAllProducts]);

  const handleShowMoreClick = () => {
    setShowAllProducts(true);
  };

  return (
    <div>
      <Layout>
        <Header />
        <Categories />
        <h2 className="text-center text-3xl opacity-60 py-6">
          {showAllProducts ? "All Products" : "Featured Products"}
        </h2>
        <div className="flex pb-10 flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-auto items-center w-4/5 justify-center gap-4 md:gap-6  lg:gap-10">
          {items?.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
        {!showAllProducts && (
          <div className="flex justify-center pb-4">
            <button
              onClick={handleShowMoreClick}
              className="flex flex-col justify-center items-center opacity-60 font-medium text-lg hover:opacity-100"
            >
              <p className="uppercase font-normal">I want to see more products</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        )}
        <SecurePurchase />
      </Layout>
    </div>
  );
}

export default Home;
