import React from 'react';

import Button from './Button';

const Image = (props)=>(
    <div>
        <h3>{props.title}</h3>
        <p>{props.source}</p>
        <small>{props.id}</small>
        <Button text="Delete" onClick={()=>{props.deleteImage(props.id)}} />
    </div>
);


export default Image;