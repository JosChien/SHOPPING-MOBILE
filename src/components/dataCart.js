import React, {Component} from 'react'

export const CartContext = React.createContext();

export default class CartProviders extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItems :[]
        };
        this.addToCart = this.addToCart.bind(this);  
        this.increase = this.increase.bind(this);
        this.reduce = this.reduce.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.total = this.total.bind(this)
    }
        addToCart(product){
            const {cartItems} = this.state;
            if(cartItems.filter(item =>item.id === product.id).length !== 0){
                var mapID = cartItems.map(item => item.id)
                var key = mapID.indexOf(product.id);
                var stateCopy = Object.assign({}, this.state);
                    stateCopy.cartItems[key].quantity += 1;
                    this.setState(stateCopy);
                    return
            }
            product.quantity = 1;
            this.setState({
                cartItems: cartItems.concat(product)
            })
        }   

        increase(item){
            const {cartItems} = this.state
            let index = cartItems.indexOf(item)
            let stateCopy = Object.assign({}, this.state);
            stateCopy.cartItems[index].quantity += 1;
            this.setState(stateCopy);
        }

        reduce(item){
            const {cartItems} = this.state
            let index = cartItems.indexOf(item)
            let stateCopy = Object.assign({}, this.state);
            if(stateCopy.cartItems[index].quantity<=1){
                return;
            }
            stateCopy.cartItems[index].quantity -= 1;
            this.setState(stateCopy);
        }

        removeItem(item){
            const {cartItems}=this.state
            let index = cartItems.indexOf(item);
            this.setState({
                cartItems: [...cartItems.slice(0,index),...cartItems.slice(index+1)]
            })
        }
        
        total(){
            const {cartItems} = this.state;
            let arr = cartItems.map(value => value.price*value.quantity);
            return arr.reduce((currentValue,Total) => currentValue+Total,0)
        }

    render(){
        return(
            <CartContext.Provider value = {{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                increase: this.increase,
                reduce: this.reduce,
                removeItem: this.removeItem,
                total: this.total
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}