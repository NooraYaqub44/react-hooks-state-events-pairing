import React from 'react'

      function VideosInfo({title, views, createdAt}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{views} Views | Uploaded at {createdAt} </p>
        </div>
    )
}

export default VideosInfo
