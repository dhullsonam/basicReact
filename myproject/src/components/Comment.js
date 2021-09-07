import React, { Component } from 'react';

import './Comment.css';

function Comment(props) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="comment">
                    <img src={props.imgsrc} width="80px" height="80px" />
                </div>
                <div className="content">
                    <h3>{props.name}</h3>

                </div>
                <div className="metadata">
                    <span className="date"><small>Today Date 6:00pm</small></span>
                </div>
                <div className="text">{props.cmt}</div>
            </div>
        </div>
    )

}
export default Comment;