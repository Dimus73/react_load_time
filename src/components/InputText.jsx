import React, {useState} from 'react';

const InputText = ({onChangeFunc}) => {
    const [value, setValue] = useState(' ');
    // console.log('onChangeFunc =>', onChangeFunc)
    return (
        <input type={"text"} value={value}
               onChange={(e)=>{
                   onChangeFunc(e.target.value, setValue)}
                }
        />
    );
};

export default InputText;