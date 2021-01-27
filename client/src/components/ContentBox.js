import React from 'react'

 const ContentBox = (props)  => {
    return (
        <div id="content-box" className='pos-flex'>
            {props.children}
        </div>
    )
}

export default ContentBox