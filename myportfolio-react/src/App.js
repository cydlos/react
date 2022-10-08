import React from 'react';
import './style.css';
import Header from './Header';
// import Avatar from './Avatar';
import Footer from './Footer';
import Carrousel from './Carrousel';

const App = () => {
  return (
    <>
      <Header />
      <Carrousel />
      {/* <Avatar /> */}
      <Footer />
    </>
  );
};
export default App;
