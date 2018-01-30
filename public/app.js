var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <header className="mui-appbar mui--z1">
                    <div className="mui-container">
                        <table>
                            <tbody className="mui--appbar-height">
                            <tr>
                                <td className="mui--text-title" id="logo">WebCorporate</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </header>
                <div id="content-wrapper">
                    <div className="mui-container-fluid">
                        <div className="mui-row">
                            <div className="mui-col-md-8 mui-col-md-offset-2">
                                <div className="mui--appbar-height"></div>
                                <h1>Corporate</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="mui-container mui--text-center">
                    </div>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);