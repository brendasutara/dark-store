import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-column justify-center mt-20">
            {children}
        </div>
    )
}

export default Layout;
