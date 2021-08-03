import React from 'react';

const  filterArray = ["All","Artificial Intelligence","Cloud Computing", "DevOps", "Programming Languages", "Mobile Application Development", "Technology and Tools", "Get a job  in a Tech Company", "Others",]
const filter = (data) => {
    return (  
        <div className="Filter">{data}</div>
    );
}



const Filter = () => {
    return ( 
        <div className="FilterWrapper">{filterArray.map(item => filter(item))}</div>
        
    );
}
 
export default Filter;