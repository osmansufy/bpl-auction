import React from 'react';

const SinglePleayer = (props) => {
    const {image,name,salary}=props.pleayer
    return (
        <div class="col-3" >
        <div class="card" >
<img src={image} class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">{name}</h5>
  <p class="card-text">{salary}</p>
  <a onClick={()=>props.clicked(props.pleayer)} class="btn btn-primary"><i class="fa fa-cart-arrow-down me-3"></i>Select Pleayer</a>
</div>
</div>
        </div>
    );
};

export default SinglePleayer;