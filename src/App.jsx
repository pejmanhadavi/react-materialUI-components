import React from 'react';
import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlight from './components/highlight';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div className="App" style={{ height: "1500px", background: "cornflowerblue" }}>
            <Header />
            <Featured />
            <VenueNfo />
            <Element name="highlights">
                <Highlight />
            </Element>
            <Footer />
        </div>
    );
}

export default App;
