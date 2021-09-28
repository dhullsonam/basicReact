import React from 'react';

const ListItem = (props) => {

    
    return (
        <div>
            <div className="todo-style">
                <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id)
                }} />
                <li>{props.text}</li>
            </div>
        </div>
    )
}
export default ListItem;