import React from 'react';
import {DataContext} from './data'
import RenderProduct from './renderProduct'


class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='container'>
            <h2 className='title'>MOBILE STORE</h2>
            <DataContext.Consumer>
                {
                    ({products}) => <RenderProduct products = {products}/>
                }
            </DataContext.Consumer>
            </div>
        )  
    }
}

export default Products