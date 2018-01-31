var React = require('react');

class Header extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="mui-container">
                <table>
                    <tbody className="mui--appbar-height">
                    <tr>
                        <td className="mui--text-title" id="logo">WebCorporate</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = Header;