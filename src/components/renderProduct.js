import React, {Component} from 'react';
import {CartContext} from './dataCart';
import {Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from 'react-router-dom';


class RenderProducts extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {products} = this.props;
        return(
            <Row>{
                products.map(item =>
                <Col className="CustomItemCard" key={item.id} sm='3' >
                <Card className='customCard' >
                <Link to={'/details?key='+item.key} className="details-link">   
                <CardImg className='customImg' top width="100%" src={item.imageUrl} alt="Card image cap" />
                <CardBody className='customCardBody'>
                < CardTitle className='customCardTitle' title={item.name}>{item.name}</CardTitle>
                <CardSubtitle className = 'customSubtitle'>${item.price}</CardSubtitle>
                <CardText className="customText">{item.decrisption}</CardText>
                </CardBody>
                </Link>
                <CartContext.Consumer>
                  {
                    ({addToCart})=><Button className='add' onClick={() => addToCart(item)}>Add to cart</Button>
                  }
                </CartContext.Consumer>
                </Card>
                </Col>
                )}
            </Row>
        )
    }
}
        
export default RenderProducts

   