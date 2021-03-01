import React from 'react';
import SingleSelectedPleayer from './SingleSelectedPleayer';

const SelectedPleayers = (props) => {
  
console.log(props?.pleayers);
    return (
        <div>
      
              <div class="list-group">
  {props?.pleayers?.map((pleayer,index)=>
       <a key={pleayer.id} className={`list-group-item list-group-item-action  ${index==props?.pleayers.length-1?"active":""}`
    } 
       aria-current="true">
           <SingleSelectedPleayer selectedPleayer={pleayer} />
           </a>
  )}
  
</div>
<h3 className="my-5">Selected pleayes:{props?.pleayers?.length}</h3>
<h4>Total Spand Money:${props.pleayers.reduce((accumulator,pleayer)=>accumulator+pleayer.salary,0)}</h4>
        </div>
    );
};

export default SelectedPleayers;