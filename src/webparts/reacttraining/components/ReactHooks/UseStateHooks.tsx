import { PrimaryButton, TextField } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';
const CounterApp:React.FC<{}>=()=>{
    const [count,setCount]=useState<number>(0);
    const [namee,setName]=useState<string>("");
    return(
        <>
        <p>Count: {count}</p>
        <PrimaryButton
        text='Count'
        onClick={()=>setCount(count+1)}
        />
        &nbsp;&nbsp;&nbsp;
        <TextField
        label='Name'
        value={namee}
        onChange={(_,val)=>setName(val||"")}
        />
        <p>Name:{namee}</p>
        </>
    )
}
export default CounterApp;