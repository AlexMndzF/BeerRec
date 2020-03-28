import React from "react"
import { Link } from "react-router-dom"
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
const BeerCard = (props) => {
    return (
        <Card style={{ width: '18rem',margin:'15px'}}>
            <Card.Img  variant="top" src={props.image_url} alt={props.name} className='beer cardImage' />
            <Card.Body style={{ height: '400px' }}>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <div style={{ height: '365px' }}>
                {props.food_pairing ?
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Maridaje:</ListGroupItem>
                        {props.food_pairing.map((x, idx) => {
                            return (
                                <ListGroupItem key={idx}>{x}</ListGroupItem>
                            )
                        })}
                    </ListGroup>
                    : 
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Ibu: {props.ibu}</ListGroupItem>
                    <ListGroupItem>Atenuation: {props.attenuation_level}</ListGroupItem>
                    <ListGroupItem>Contributor: {props.contributed_by}</ListGroupItem>
                        <ListGroupItem>🤟🏽</ListGroupItem>
                    </ListGroup>
                    }
            </div>
            <Card.Body style={{alignSelf:'center', border:'1px solid', borderColor:'#007bff!important' ,borderRadius:'inherit',padding:'5px',marginBottom:'15px'}}>
                <Link style={{ textDecoration: 'none', color: '#007bff!important' }} to={`/${props._id}`} variant="outline-info" size="lg" block>View more</Link>
            </Card.Body>
        </Card>
    )
}
export default BeerCard
