import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import TopPicture from './home/TopPicture';
import CardHolder from './home/CardHolder';
import TeamCardHolder from './home/TeamCardHolder';
import Interesse from './home/Interesse';

import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <TopPicture />
        <CardHolder />
        <Interesse />
        <TeamCardHolder />
        

        <Footer />
    </div>
  );
}

export default App;
