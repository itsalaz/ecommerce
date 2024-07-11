import React from "react"


export default function Search({search, onSearchChange}) {

  
  return(
    <div className="searchbar">
      <input 
      type= "text"
      placeholder="Type a name to search..."
      value= {search}
      onChange= {(e) => onSearchChange(e.target.value)} 
      />
    </div>
  )
}