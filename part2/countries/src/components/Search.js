import React from "react";
import Input from "./Input";

const Search = ({label , value , onChange , onClear}) => {

    return (<div style={styles}>
            <Input 
                label={label} 
                value={value} 
                onChange={onChange} />

                <button style={{marginLeft:"2px"}} onClick={onClear}>Clear</button>
           </div>)

}

let styles ={
    display:"flex",
    
  
}

export default Search;