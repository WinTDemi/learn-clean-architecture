import { ReactNode } from 'react';
import Categories from './categories';

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <div className='flex'>
            <header className='hidden lg:basis-1/6 lg:block'>
                <Categories />
            </header>
            <main className="lg:basis-5/6 basis-full">
                {children}
            </main>
        </div>
    );
}

export default Layout;
