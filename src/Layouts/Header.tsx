import React from 'react';
import { Tabs } from '../components/Tabs';

function Header() {
  return (
    <div className="w-full bg-black pt-10 pb-2 text-white flex  justify-between px-6 ">
      <span>icon</span>
      <Tabs />
    </div>
  );
}

export default Header;
