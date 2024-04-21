import { ReactNode } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col justify-center mt-24'>
            <Navbar />
            {children}

        </div>
    )
}

export default Layout;
