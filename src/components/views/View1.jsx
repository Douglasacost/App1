import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Components from '../common';
let {Button, Box, Content} = Components;

export default class View1 extends Component {
    sendMessage ()  {
        return this.props.setMessage()
    }
    render(){
        let sendMessage = this.sendMessage.bind(this);
        return <div className="Container">
            <Box>
            <Content>
                <div style=
                    {{backgroundColor: 'gray', width: '80%',
                     height: '90%', margin: '10px auto'}}></div>
            </Content>
            <Content>
                <div className="Box-content--middle">
                    <Button action={sendMessage} className="mui-btn" text="PLAY" />
                    <Link to="/secondView">
                        <Button className="mui-btn" text="OK" />
                    </Link>
                </div>
            </Content>
        </Box>
        </div>;
    }
}