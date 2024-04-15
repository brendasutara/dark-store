import Card from "../../Components/Card"
import Categories from "../../Components/Categories"
import Header from "../../Components/Header"
import Layout from "../../Components/Layout"



function Home() {
  return (
    <div>
      <Layout>
        <Header />
        <Categories />
        <h2 className="text-center text-3xl opacity-60 py-6">Todos los productos</h2>
        <div className="flex justify-center flex-wrap gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </Layout>

    </div>
  )
}

export default Home