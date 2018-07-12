import React, { Component } from 'react';
import AppViewNew from '../newFlux/AppViewNew';
import {AppViewOld} from "../oldFlux/AppViewOld";

export default class MainContainer extends Component {

    render() {
        return (
            <div className="app-container">
                <AppViewOld {...this.state}/>
                <AppViewNew {...this.state}/>
            </div>
        );
    }
}

