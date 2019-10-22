import React, {Component} from 'react';
import axios from "axios"

export const DataContext = React.createContext();

export default class DataProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
      axios.get('https://api.myjson.com/bins/9nfhu').then(res =>
      this.setState({
        products: res.data
      })
      )
    }
    render(){
        return(
            <DataContext.Provider value = {{
                products : this.state.products
            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
