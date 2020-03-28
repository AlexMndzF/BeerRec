import React from "react"
import { Link } from "react-router-dom"
import { Tab, Image, Card, Tabs, ListGroupItem, ListGroup } from "react-bootstrap"

const BeerInfo = (beer) => {
    return (
        <>
            <div style={{ width: '14rem', margin:'auto' }}>
                <Image style={{margin:'15px'}} src={beer.image_url} fluid />
                <Card.Title>{beer.name}</Card.Title>
            </div>
            <div>
                <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example">
                    <Tab eventKey="Description" title="Description">
                        <Card.Text>
                            {beer.description}
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Maridaje" title="Maridaje">
                        <Card.Text>
                            {beer.food_pairing ?
                                <ListGroup className="list-group-flush">
                                    {beer.food_pairing.map((x, idx) => {
                                        return (
                                            <ListGroupItem key={idx}>{x}</ListGroupItem>
                                        )
                                    })}
                                </ListGroup>
                                : null}
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Ibu" title="Ibu">
                        <Card.Text>
                            {beer.ibu}
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Atenuation" title="Atenuation">
                        <Card.Text>
                            {beer.attenuation_level}
                        </Card.Text>
                    </Tab>
                    <Tab eventKey="Brew_tips" title="Brew tips">
                        <Card.Text>
                            {beer.brewers_tips}
                        </Card.Text>
                    </Tab>
                    
                </Tabs>
        </div>
        </>
    )
}
export default BeerInfo