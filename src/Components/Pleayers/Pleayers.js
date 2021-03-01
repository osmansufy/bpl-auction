import React, { useEffect, useState } from 'react';
import data from '../../FakeData/FakeData.json'
import SelectedPleayers from './Actions/SelectedPleayers';
import SinglePleayer from './SinglePleayer';
const Pleayers = () => {
const [pleayers,setPleayers]=useState([])
const [selectedPleayers,setSelectedPleayers]=useState([])
useEffect(()=>{
setPleayers(data)
console.log(data)
},[])
const onSellectPleayer=(pl)=>{
   const updatedPlears=[...selectedPleayers,pl]
    setSelectedPleayers(updatedPlears)
    console.log(selectedPleayers);
}

    return (
       
        <div class="container">
        <div class="row">
            <div className="col-9">
            <div class="row gy-5">
            {pleayers && pleayers.map(pleayer=>(
                <SinglePleayer key={pleayer.id} pleayer={pleayer} clicked={onSellectPleayer} />
            ))}
         
          </div>
          </div>
      
              <div className="col-3">
                 <SelectedPleayers pleayers={selectedPleayers} />
              </div>
          </div>
        </div>
 
    );
};

export default Pleayers;