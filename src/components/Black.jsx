import React, {useContext, useEffect, useState} from 'react';
import {rndCount} from "./lib/rndCount";
import {Repeater} from "./lib/Repeater";
import Blue from "./Blue";
import InputText from "./InputText";
import {ElementContext} from "../index";


const Black = ({nFROM, nTO, deep, onChangeFunc}) => {
    const {setElementCount} = useContext(ElementContext);
    const [childCount, setChildCount] = useState(rndCount(nFROM,nTO))

    useEffect(() => {
        setElementCount(count=>count+1);
        // console.log('--- Black useEffect', childCount)
        // console.log('--- Black useEffect setElementCount', setElementCount)
    }, []);

    useEffect(()=>{
        setChildCount(rndCount(nFROM,nTO))
    },[nFROM,nTO])

    return (
        <div style={{minWidth:'15%', minHeight: '30px', border: '2px solid black', margin: '2px'}}>
            {deep > 0 ? childCount : ''}
            {
                deep > 0 ?
                    Repeater(Blue, childCount, deep-1, onChangeFunc, nFROM, nTO)
                    :
                    <InputText onChangeFunc={onChangeFunc}/>
            }
        </div>
    );
};

export default Black;