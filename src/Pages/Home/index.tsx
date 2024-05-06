import { useContext } from 'react';
import Card from '../../Components/Card';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Layout from '../../Components/Layout';
import SecurePurchase from '../../Components/SecurePurchase';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Footer from '../../Components/Footer';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const context = useContext(ShoppingCartContext)!;

  const handleShowMoreClick = () => {
    context.setShowAllProducts(true);
  };

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        <div className='flex pb-10 flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mx-auto items-center w-4/5 justify-center gap-4 md:gap-6  lg:gap-10'>
          {context.filteredItems?.map((item) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>

      )
    } else {
      return (
        <div className='flex flex-col justify-center items-center space-x-2 mx-auto py-28'>
          <img className='w-28 ' src="https://cdn-icons-png.flaticon.com/512/12870/12870689.png" alt="no results" />
          <h2 className='text-center text-3xl opacity-60 py-6'>No Result Found</h2>
          <p className='text-center text-xl opacity-60'>We can't find any item matching your search</p>
        </div>
      )
    }

  }

  return (
    <div>
      <Layout>
        <Header />
        <Categories />
        <h2 className='text-center text-3xl opacity-60 py-6'>
          {context.showAllProducts ? 'All Products' : 'Featured Products'}
        </h2>
        {renderView()}
        {!context.showAllProducts && (
          <div className='flex justify-center pb-4'>
            <button
              onClick={handleShowMoreClick}
              className='flex flex-col justify-center items-center opacity-60 font-medium text-lg hover:opacity-100'
            >
              <p className='uppercase font-normal'>I want to see more products</p>
              <ChevronDownIcon className='size-12' />
            </button>
          </div>
        )}
        <SecurePurchase />
      </Layout>
      <Footer />
    </div>
  );
}

export default Home;
