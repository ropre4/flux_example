import React, { Component } from 'react';

export class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    onClick() {
        this.props.onAddItem(this.state.value);
        this.setState({value: ""})
    }
    render(){
        return (
            <section id="main">
                <input type="text" onChange={this.onChange.bind(this)} value={this.state.value}/>
                <button onClick={this.onClick.bind(this)}>Add</button>
            </section>
        )};
}