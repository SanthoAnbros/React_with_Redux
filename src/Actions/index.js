import { READ_ITEMS, INSERT_ITEM } from './ActionTypes';


export const GetItems = () => dispatch =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(posts =>{
        console.log(posts);
        dispatch({
            type    : READ_ITEMS,
            payload : posts
        });
    });
};

export const InsertItem = (data) => dispatch =>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then((responseJson)=>{
        console.log(responseJson);
        dispatch({
            type: INSERT_ITEM,
            payload : responseJson
        })
    })
};