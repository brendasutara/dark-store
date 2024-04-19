import { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (

        <div className='flex flex-col justify-center'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
