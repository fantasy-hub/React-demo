import React from 'react'

export default function CartCom({ goods, increase, decrease, cartChange }) {
    // console.log(goods,increase, decrease);
    return (
        <div>
            <h3>购物车组件</h3>
            { goods.map((item, index) => {
                return (
                    <div key={ item.id }>
                        <span>{ item.text }</span>
                        <button onClick={ () => increase(item) }>-</button>
                        <input              
                            type="text"
                            value={ item.count }
                            onChange={ (e) => { cartChange(e, item.id) } }
                        />
                        <button onClick={ () => decrease(item) }>-</button>
                    </div>
                )
            })}
        </div>
    )
}
