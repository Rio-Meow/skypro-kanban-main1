import React from 'react';
import Main from '../components/Main/Main';
import PopBrowse from '../components/PopBrowse/PopBrowse';
import PopNewCard from '../components/PopNewCard/PopNewCard';
import PopUser from '../components/PopUser/PopUser';

function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <PopBrowse />
      <PopUser />
      <PopNewCard />
    </div>
  );
}

export default HomePage;