import React, { Component } from 'react';
import { CartContext } from './dataCart';
import axios from 'axios'

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    
    componentWillMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');
        axios.get('https://api.myjson.com/bins/' + key).then(res => {
        this.setState({
            product: res.data
        })
        })
    }


    render() {
        const { product } = this.state;
        if (!product.description) {
            return null
        }
        return (
            <div className='container'>
                <h2 className='detail-title'>{product.name}</h2>
                <div className='details-content'>
                    <img style={{ height: '300px', marginTop: '20px' }} src={product.imageUrl} />
                    <div className='detailsCol2'>
                        <h5>Price: <span>{product.price}</span></h5>
                        <CartContext.Consumer>
                            {
                                ({ addToCart }) => <button className='detail-add' onClick={() => addToCart(product)}>Add to cart</button>
                            }
                        </CartContext.Consumer>
                        <h3>Smart phone</h3>
                        <p>{product.description.join('. ')}</p>
                    </div>
                    <div className='parameter'>
                        <h4>Specifications</h4>
                        <ul>
                            <li><span>Display: </span> <div> {product.Specifications['Display']} </div></li>
                            <li><span>Operating System:</span> <div> {product.Specifications['OperatingSystem']} </div></li>
                            <li><span>Processor (CPU):</span><div> {product.Specifications['CPU']} </div></li>
                            <li><span>Memory: </span><div> {product.Specifications.Memory} </div></li>
                            <li><span>Storage:</span><div> {product.Specifications.Storage} </div></li>
                            <li><span>SIM capability:</span> <div> {product.Specifications.SIM} </div></li>
                            <li><span>Battery:</span> <div> {product.Specifications.Battery} </div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

