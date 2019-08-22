import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InsertItem } from '../../Actions';


class PostForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title : ''
        }

        //this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        let data = {
            title : this.state.title
        }
        this.props.InsertItem(data);
    }

    render() {
        return (
            <div>
                <input value={this.state.title} onChange={ (e) => this.onChange(e) } name="title" type="text"></input>
                <button onClick={(e)=>this.onSubmit(e)}>Add</button>
            </div>
        )
    }
}

export default connect(null, { InsertItem })(PostForm)
