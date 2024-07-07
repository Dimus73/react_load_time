import React from "react";
export const Repeater = (Component, count, deep, onChangeFunc, nFROM, nTO) => {
    // console.log('Deep => ', deep)
    return (
        <>
            {[...Array(count)].map((_, i) => (
                <Component key={""+deep+nFROM+nTO+i} deep={deep} onChangeFunc={onChangeFunc} nFROM={nFROM} nTO={nTO} />
            ))}
        </>
    );
}