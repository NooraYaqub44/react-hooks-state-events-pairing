import React from 'react'

function VoteButton({upVote,downVote}) {
    return (
        <div>
            <button>{upVote}👍</button>
            <button>{downVote}👎</button>
        </div>
    )
}

export default VoteButton
