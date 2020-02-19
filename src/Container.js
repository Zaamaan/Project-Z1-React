import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import Navbar from './Navbar'
import Slider from './Slider'
import FeaturedCard from './FeaturedCard'


function Container() {
  return (
    <div>
      <Header />
      <Navbar />

      <div class="container">
        <Slider />
      </div>

      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <Card imgName="star_wars_1.jpg" />
          </div>
          <div class="col">
            <Card imgName="star_wars_2.jpg"/>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Card imgName="star_wars_4.jpg" />
          </div>

          <div class="col">
            <Card imgName="star_wars_5.jpg" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <FeaturedCard />
          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
}



export default Container;
