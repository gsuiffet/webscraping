var React = require('react');

class Corporate extends React.Component {
    constructor() {
        super();
        this.state = { name: "Corporate name", employees: "number of employees", logo: null, corporate:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({corporate: event.target.value});
    }
    handleSubmit(event) {
        var that = this;
        fetch('/getdata',{
            method: 'POST',
            body: JSON.stringify({
                corporate: that.state.corporate
            }),
            headers: {"Content-Type": "application/json"}
        }).then(function (data) {
            return data.json()
        }).then(function(results) {
            console.log("results",results);
            that.setState({
                name: results.name,
                employees: results.employees,
                logo: document.getElementById("logoCorporate").src = 'logo'+that.state.corporate+'.png'
            });
        });
        event.preventDefault();
    }
    render() {
        return (
            <div id="content-wrapper">
                <div className="mui-container-fluid">
                    <div className="mui-row">
                        <div className="mui-col-md-8 mui-col-md-offset-2">
                            <div className="mui--appbar-height"></div>
                            <h1>Corporate</h1>
                            <p>Enter the name of one corporate on Viadeo.</p>
                            <p style={{color:"#777", fontStyle:"italic"}}>Exemple: <a title="coca" href="http://fr.viadeo.com/fr/company/renault" target="blank">renault</a>, <a title="coca" href="http://fr.viadeo.com/fr/company/coca-cola-entreprise" target="blank">coca-cola-entreprise</a>, <a title="coca" href="http://fr.viadeo.com/fr/company/orangina-schweppes" target="blank">orangina-schweppes</a>...</p>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form">
                                        <label>Corporate name</label>
                                        <input type="text" id="corporate" name="corporate" placeholder="renault" value={this.state.corporate} onChange={this.handleChange}/>
                                        <input type="submit" className="mui-btn mui-btn--primary" id="valider" value="Find"/>
                                    </div>
                                </form>
                            <div className="mui-row">
                                <div className="mui-col-md-12 mui--text-center">
                                    <div className="mui-col-xs-4">
                                        <img src="../src/img/logo.png" id="logoCorporate" alt="logo corporate"/>
                                    </div>
                                    <div className="mui-col-xs-4" id="infoName">
                                        <p> {this.state.name}</p>
                                    </div>
                                    <div className="mui-col-xs-4" id="infoEmployees">
                                        <p> {this.state.employees}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Corporate;