import React from 'react';

const SingleSelectedPleayer = (props) => {
    const {name,salary,jersey_number}=props.selectedPleayer
    return (
       <>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{name}</h5>
        <small>{salary}</small>
      </div>
    
      <small>Jersey Number:{jersey_number}</small>
    </>
    );
};

export default SingleSelectedPleayer;