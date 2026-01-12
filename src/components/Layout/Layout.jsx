import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Outlet />    
    </>
  );
}

export default Layout;