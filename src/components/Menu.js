import React from 'react';
import { BrowserRouter as Route, Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {CartContext} from './dataCart';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className='container padding customNavbar'>
            <div className="container-child1">
              <div className="logo">
                <img src={this.props.logo} alt="logo" width={120} height={80}/>
              </div>
            </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto FloatLeft" navbar>
              <NavItem>
              <Link to="/" className="link">Products</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Filter
                </DropdownToggle>
                <DropdownMenu right>
                <Link to ="/iphone" className="link">
                  <DropdownItem>Iphone</DropdownItem>
                  </Link>
                  <Link to ="/samsung" className="link">
                  <DropdownItem>Samsung</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <Link to ='/cart' className='link'>
          <button className="button">
            <CartContext.Consumer>
              {
                ({cartItems}) => (<span className='countNumber'>{cartItems.length}</span>)
              }
            </CartContext.Consumer>
          <FaShoppingCart className='customIcon'/>
          </button>
          </Link>
        </Navbar>
        </div>
    );
  }  
}

