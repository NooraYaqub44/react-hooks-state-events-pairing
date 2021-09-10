import React from 'react'

export default function Video({emb}) {
    return (
        <div>
              <iframe
                width="550"
                height="350"
                src={emb}
                frameBorder="0"
                title="Thinking in React"
      />
        </div>
    )
}
