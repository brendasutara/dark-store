import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import ShoppingCartProvider from '../../Context'
import './App.css'
import ModalCart from '../../Components/CheckoutSideMenu'
import ModalUnstyled from '../../Components/ModalUnstyled'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/shoes", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/miscellaneous", element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <ModalUnstyled />
          <ModalCart />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App