import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <Products />
                        <h3>
                            <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
                        </h3>
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;