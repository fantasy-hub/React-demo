import React from 'react'
import { Button } from 'antd';
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'

export default function AntdTest() {
    function buttonClick() {
        console.log(123);
    }

    return (
        <div>
            <Button type="primary" onClick={ () => buttonClick() }>Primary</Button>
        </div>
    )
}
