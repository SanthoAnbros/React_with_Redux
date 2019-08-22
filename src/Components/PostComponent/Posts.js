import React, { Component } from 'react';
import { GetItems } from '../../Actions';
import {connect} from 'react-redux';
import  PostForm  from './PostForm'

class Posts extends Component {

    componentWillMount(){
        this.props.GetItems();
    }

    render() {
        
        const Items = this.props.allItems.map((item)=>{
            return(
               <div key={item.id}> {item.title} </div> 
            )
        });

        return (
            <div>
                <PostForm/>
                    <div><b>Title</b></div>
                    <div>
                        {Items}
                    </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>({
    allItems : state.Items.items
});

export default connect(mapStatetoProps, { GetItems })(Posts)
