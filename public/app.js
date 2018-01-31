var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header.js');
var Corporate = require('./components/corporate.js');
var Footer = require('./components/footer.js');

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