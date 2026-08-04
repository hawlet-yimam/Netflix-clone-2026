import React from 'react'
import Header from "../../component/Header/Header";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import RowList from '../../component/Rows/RowList/RowList';
function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}
export default Home;