import React, { Component } from 'react';

export default class Button extends Component {
    render(){
        let {className, text, icon, action} = this.props;
        return <button onClick={action} className={className}>{text || icon}</button>;
    }
}