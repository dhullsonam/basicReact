import React, { Component } from 'react';
import Comment from './Comment';

function Comments() {
    return (
        <div>
            <Comment imgsrc = "/images/andry.jpeg" name="Andry" cmt="Good Work !" />
            <Comment imgsrc = "/images/backy.jpeg" name="Backy" cmt="Nice job !" />
            <Comment imgsrc = "/images/sitha.jpeg" name="sitha" cmt="Great Work!" />

        </div>
    )
}
export default Comments;