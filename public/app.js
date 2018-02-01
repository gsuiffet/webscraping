import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Corporate from './components/corporate.js';
import Footer from './components/footer.js';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <header className="mui-appbar mui--z1">
                    <Header/>
                </header>
                <Corporate/>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);