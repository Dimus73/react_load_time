import React, {useContext, useEffect, useState} from 'react';
import {rndCount} from "./lib/rndCount";
import Black from "./Black";
// import {nFROM, nTO} from "./lib/constants";
import {Repeater} from "./lib/Repeater";
import InputText from "./InputText";
import {ElementContext} from "../index";


const Blue = ({deep, onChangeFunc, nFROM, nTO}) => {
    const {setElementCount} = useContext(ElementContext);
    // const [childCount,] = useState(rndCount(nFROM,nTO))
    // const childCount = rndCount(nFROM, nTO)
    const [childCount, setChildCount] = useState(rndCount(nFROM,nTO))

    useEffect(() => {
        setElementCount(count=>count+1);
        // console.log('--- Blue useEffect', childCount)
    }, []);

    useEffect(()=>{
        setChildCount(rndCount(nFROM,nTO))
    },[nFROM,nTO])

    return (
        <div style={{minWidth:'15%', minHeight: '30px', border: '2px solid blue', margin: '2px'}}>
            {deep > 0 ? childCount : ''}
            {
                deep > 0 ?
                    Repeater(Black, childCount, deep-1, onChangeFunc, nFROM, nTO)
                    :
                    <InputText onChangeFunc={onChangeFunc}/>
            }
        </div>
    );
};


export default Blue;