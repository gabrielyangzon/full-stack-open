import React from 'react';

const Input = ({label,value ,name, onChange}) => {

return (<div style={styles.container}>
            <label 
                style={styles.label}>{label}:
            </label>
            <input 
                name={name} 
                value={value} 
                onChange={onChange} 
            />
    </div>)


}


const styles = {
    container: {
         display:"flex" ,
         alignItems:"center",
         flexWrap:"wrap"
    },
    label :{
            width:"100px"
    }

}
export default Input;