
import { useEffect, useState } from "react"
import Card from "../../Components/Card"
import Categories from "../../Components/Categories"
import Header from "../../Components/Header"
import Layout from "../../Components/Layout"
import { Product } from "../../Models/Products"



function Home() {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error))

  }, [])

  return (
    <div>
      <Layout>
        <Header />
        <Categories />
        <h2 className="text-center text-3xl opacity-60 py-6">All the products</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-auto items-center w-4/5 justify-center gap-4 md:gap-6  lg:gap-10">
          {
            items?.map((item) => {
              return <Card key={item.id} {...item} />
            })
          }
        </div>
      </Layout>

    </div>
  )
}

export default Home