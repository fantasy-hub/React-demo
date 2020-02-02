import React, { useState, useMemo, useCallback } from 'react'
import { Button, Input } from 'antd';

// export default function Test() {
//     const [count, setCount] = useState(0)
//     const [value, setValue] = useState('')
//     // const [times, setTimes] = useState(0)

//     const getNum = useMemo(() => {
//         console.log('执行了');
//         const arr = Array.from({ length: count * 100 }, (v, i) => i)
//         if (!arr.length) return 0; 
//         return arr.reduce((prev, curr) => prev + curr)
//     }, [count])

//     return (
//         <div>
//             <h4>总和: {getNum}</h4>
//             <Button type="primary" onClick={() => setCount(prevCount => prevCount + 1)}>add</Button>
//             <Button type="danger" onClick={() => setCount(0)}>reset</Button>
//             <Input value={value} onChange={event => setValue(event.target.value)} />
//         </div>
//     )
// }

export default function Parent() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    const getNum = useCallback(() => {
        console.log('执行了');
        return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
    }, [count])
 
    return <div>
        <Child getNum={getNum} />
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}

const Child = React.memo(function ({ getNum }) {
    return <h4>总和：{getNum()}</h4>
})