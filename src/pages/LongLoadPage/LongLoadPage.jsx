import React, {useContext, useEffect, useState} from 'react';
import {rndCount} from "../../components/lib/rndCount";
import {DEEP, nFROM, nTO, delayTime} from "./constants";
import {ElementContext} from "../../index";
import {Repeater} from "../../components/lib/Repeater";
import Black from "../../components/Black";
import {useRenderComplete} from "../../components/hooks/useRenderComplite";

const childCount = rndCount(nFROM, nTO)
console.log("childCount =>", childCount)
const
    newFrom = 6,
    newTo = 7,
    newDeep = 5;

const LongLoadPage = () => {
    const onChangeFunc = (value, setValue) => setValue(value);
    const {elementCount, setElementCount} = useContext(ElementContext);

    const [state01, setState01] = useState(0);
    const [state02, setState02] = useState(0);
    const [state03, setState03] = useState(0);
    const [state04, setState04] = useState(0);

    const [localFrom, setLocalFrom] = useState(nFROM);
    const [localTo, setLocalTo] = useState(nTO);
    const [localDeep, setLocalDeep] = useState(DEEP);
    const [childCount, setChildCount] = useState(rndCount(nFROM,nTO))

    useEffect(() => {
        setElementCount(count=>count+1);
        setState01(5);
    }, []);

    useEffect(() => {
        console.log('---- Set setState02 useEffect')
        if (state01 !== 0) {
            console.log('**** Set setState02 ')
            setState02(5);
        }
    }, [state01]);

    useEffect(() => {
        console.log('---- Set setState03 useEffect')
        if (state02 !== 0) {
            console.log('**** Set setState03 in timeout')
            setTimeout(() => {
                setState03(5);
                setLocalFrom(newFrom);
                setLocalTo(newTo);
            }, delayTime);
            // setState03(5);
        }
    }, [state02]);

    useEffect(() => {
        console.log('---- Set setState04 useEffect')
        if (state03 !== 0) {
            console.log('**** Set setState04 to 5')
            setTimeout(() => {
                setState04(5)
                setLocalDeep(newDeep);
            }, delayTime);
            // setState04(5);
        }
    }, [state03]);

    useEffect(()=> {
        setChildCount(rndCount(localFrom, localTo))
    }, [localFrom, localTo])

    const complite = useRenderComplete('LongLoad', 8);

    console.log("@@@@ States => ", state01, state02, state03, state04)
    return (
        <div style={{border:"solid 4px red", padding:"4px"}}>
            {childCount}
            <h1>Всего отрисовано {elementCount} элементов</h1>
            <h3>States: {state01}, {state02}, {state03}, {state04}</h3>
            <h3>nFROM {nFROM} localFrom {localFrom} | nTO {nTO} localTo {localTo} | DEEP {DEEP} localDeep {localDeep}</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
                {Repeater(Black, childCount, localDeep, onChangeFunc, localFrom, localTo)}
            </div>
        </div>
    );
};

export default LongLoadPage;