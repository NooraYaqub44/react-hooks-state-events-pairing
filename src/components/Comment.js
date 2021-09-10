import React from 'react'

function Comment({comments}) {
    return (
        <div>
           {comments.map((comment)=>{
           return (
            <div>
               <h4 key={comment.id}>{comment.user}</h4>
               <p key={comment.id}>{comment.comment}</p>
            </div>
            )
           })}     
        </div>
    )
}

export default Comment
