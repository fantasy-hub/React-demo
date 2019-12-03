import React, { memo } from 'react'

export default memo(function CommentMemo(props) {
    console.log('只执行了两次');
    return (
        <div>
            <p>{ props.body }</p>
            <p>{ props.author }</p>
        </div>
    )
})
