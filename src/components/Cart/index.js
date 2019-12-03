import React, { Component } from 'react'
import CartCom from '../CartCom/index'

export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            goods: [
                { id: 1, text: '咖啡' },
                { id: 2, text: '可乐' },
                { id: 3, text: '虾条' },
            ],
            input: '',
            cart: [],
            cartValue: ''
        }

        this.addGood = this.addGood.bind(this);
    }
    
    render() {
        return (
            <div>
                { this.props.title && <h2>{ this.props.title }</h2> }

                <div>
                    <input
                        type="text"
                        value={ this.state.input }
                        onChange={ this.inputChange }
                    />
                    <button onClick={ this.addGood }>添加商品</button>
                </div>

                <ul>
                    { this.state.goods.map((good, index) => (
                        <li key={ good.id }>
                            <span>{ `${good.id}. ${good.text}` }</span>
                            <button onClick={ () => { this.addCart(good, index) } }></button>
                        </li>
                    )) }
                </ul>

                <CartCom goods={ this.state.cart } increase={ this.increase } decrease={ this.decrease } cartChange= { this.cartChange }></CartCom>
            </div>
        )
    }

    inputChange = (e) => {
        // console.log(e, 'input');
        this.setState({ input: e.target.value })
    }

    addGood() {
        this.setState(prevState => {
            return { 
                goods: [
                    ...prevState.goods,
                    {
                        id: prevState.goods.length + 1,
                        text: prevState.input,
                    }
                ]
            }
        })

        this.setState({ input: '' })
    }

    addCart = (good, index) => {
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(i => i.id === good.id)
        const item = newCart[idx]

        if (item === undefined) {
            newCart.push({ ...good, count: 1 })
        } else {
            newCart.splice(idx, 1, { ...item, count: ++item.count })
        }

        this.setState({ cart: newCart})
    }

    increase = () => {

    }

    decrease = () => {

    }

    cartChange = (e, id) => {
        // console.log(e.target.value, id);
        const newCart = [...this.state.cart]
        const value = e.target.value

        const idx = newCart.findIndex(item => item.id === id)
        const item = newCart[idx]

        item.count = value
        newCart.splice(idx, 1, item)

        this.setState({ cart: newCart })
        console.log(this.state.cart);
    }
}
