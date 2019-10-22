import React,{Component} from 'react';
import {CartContext} from './dataCart';

import { Table } from 'reactstrap';
import { FaRegTrashAlt } from "react-icons/fa";

export default class Cart extends Component{
    constructor(props){
        super(props);  
    }
    
    render(){
        return(
            <div className='container'>
        <Table striped style={{textAlign: 'center', marginTop: '40px'}}>
        <thead>
          <tr className='tableHeader'>
            <th>#</th>
            <th>Image</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>Unit Price </th>
            <th>subTotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <CartContext.Consumer>
        {
            ({cartItems,increase,reduce,removeItem}) =>cartItems.map(item =>
            <tr key = {item.id}>
                <th scope="row">{cartItems.indexOf(item)+1}</th>
                <td><img src={item.imageUrl} className='cartImg'/></td>
                <td className='cartName' >{item.name}</td>
                <td className='quantity'>
                    <button onClick ={()=>reduce(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick = {()=>increase(item)} >+</button>
                </td>
                <td >${item.price}</td>
                <td >${item.price*item.quantity}</td>
                <td>
                <FaRegTrashAlt className='cartIcon' onClick={()=> removeItem(item)}/>
                </td>
            </tr>
            )
        }  
        </CartContext.Consumer>
        </tbody>
        </Table>
        <CartContext.Consumer>
        {
          ({total}) => <div className='total'>Total: ${total()}</div>
        }
        </CartContext.Consumer>
        </div>
        )
    }
}