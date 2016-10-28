import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header
                        mdl-layout--fixed-tabs testX">
                <header className="mdl-layout__header">
                    {/* Tabbs */}
                    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
                        <Link to={`abbott01`} className="mdl-layout__tab is-active">abbott01</Link>
                        <Link to={`Form2`} className="mdl-layout__tab">Form2</Link>
                        <Link to={`Form3`} className="mdl-layout__tab">Form3</Link>
                    </div>
                </header>
            </div>
        );
    }
}