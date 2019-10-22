import React from 'react';
import RenderProduct from './renderProduct';
import {DataContext} from './data'

export default  class Mobile extends React.Component{
    constructor(){
        super();
    }
    render(){
        var currentRoute = window.location.pathname;
        currentRoute = currentRoute.split('/')[1];
    return (
        <div className='container'>
            <h1 className='title'>MOBILE {currentRoute}</h1>
            <DataContext.Consumer>
                {   
                    ({products})=> <RenderProduct products = {products.filter(value =>
                        {
                        if(currentRoute ==='iphone'){
                       return value.manufacturer === 'iphone'
                    }else{
                        return value.manufacturer === 'samsung'
                    }} 
                    )}/>
                }
            </DataContext.Consumer>
        </div>
            )
            }
}