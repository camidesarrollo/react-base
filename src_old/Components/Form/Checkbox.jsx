import React from 'react';

const Checkbox = ({value, onChange })=>{
    return (
        
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
        </label>
    )

}

export default Checkbox;