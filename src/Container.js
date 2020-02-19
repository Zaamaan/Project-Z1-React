import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Card from './Card'


function Container() {
  return (
    <div>
      <Header />

      <div class="container-fluid">

        <div class="row">
          <div class="col">
          <Card />
          </div>
          <div class="col">
          <Card />
          </div>
        </div>

        <div class="row">
          <div class="col">
          <Card />
          </div>
          <div class="col">
          <Card />
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}



export default Container;
