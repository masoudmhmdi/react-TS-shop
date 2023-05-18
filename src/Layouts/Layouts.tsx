import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layouts;
