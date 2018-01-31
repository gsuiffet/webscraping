var React = require('react');

class Corporate extends React.Component {
    constructor() {
        super();
        this.state = { name: "", employees: "", logo: null, corporate:""};
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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group" >
                                        <label>Corporate name</label>
                                        <input type="text" id="corporate" name="corporate" placeholder="orangina-schweppes" value={this.state.corporate} onChange={this.handleChange}/>
                                    </div>
                                    <input type="submit" className="btn btn-primary" id="valider" value="Submit"/>
                                </form>
                            <p> {this.state.name}</p>
                            <p> {this.state.employees}</p>
                            <img src="../src/img/logo.png" id="logoCorporate" alt="logo corporate"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Corporate;