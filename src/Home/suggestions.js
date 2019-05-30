import React from 'react'


const Suggestions = (props) => {

    const options = props.results.map((val, index) => {
        return <a  onClick={() => props.handleInfos()}><div className="li" key={index}>{val.name}</div></a>
    });
  return <div className = "menu">{options}</div> 
}

export default Suggestions