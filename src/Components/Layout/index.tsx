import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col justify-center'>
            {children}
        </div>
    )
}

export default Layout;
