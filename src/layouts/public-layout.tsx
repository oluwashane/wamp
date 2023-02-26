import Footer from '@/components/content/Footer';
import Header from '@/components/content/Header';
import { ReactNode } from 'react';

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({
  children,
}: PublicLayoutProps) => {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      <Footer />
    </div>
  );
};
