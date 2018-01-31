var React = require('react');

class Corporate extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
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
        );
    }
}

module.exports = Corporate;