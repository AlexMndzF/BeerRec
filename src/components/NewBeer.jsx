import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import service from "../services/beers"
import { Form, Button } from "react-bootstrap"

class AddBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: '',
                ibu: 0
            }
        }
        this.BeerService = new service()
    }
    change = (e) => {
        let { name, value } = e.target
        this.setState({
            ...this.state,
            beer: {
                ...this.state.beer,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.BeerService.AddBeer(this.state.beer)
            .then(response => this.setState({ redirect: true }))
    }



    render() {
        return (
            <>
                {this.state.redirect ? <Redirect to='/' /> : null}
                <Form onSubmit={this.handleSubmit} style={{ width: '45vw', margin: 'auto' }}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" value={this.state.beer.name} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Tag Line:</Form.Label>
                        <Form.Control name='tagline' type="text" placeholder="Enter Tag line" value={this.state.beer.tagline} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" name='description' placeholder="Enter description" value={this.state.beer.description} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Ibu:</Form.Label>
                        <Form.Control name='ibu' type="text" placeholder="Enter ibu" value={this.state.beer.ibu} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>First brewed:</Form.Label>
                        <Form.Control name='first_brewed' type="text" placeholder="Enter first brewed" value={this.state.beer.first_brewed} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Brewers Tips:</Form.Label>
                        <Form.Control name='brewers_tips' type="text" placeholder="Enter brewers tips" value={this.state.beer.brewers_tips} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Attenuation Level:</Form.Label>
                        <Form.Control name='attenuation_level' type="text" placeholder="Enter attenuation level" value={this.state.beer.attenuation_level} onChange={this.change} />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Contributed by:</Form.Label>
                        <Form.Control name='contributed_by' type="text" placeholder="Enter contributor" value={this.state.beer.contributed_by} onChange={this.change} />
                    </Form.Group>
                    <Button className='submitNewBeer' variant="outline-primary" type="submit">
                        Submit
                </Button>
                </Form>
            </>
        )
    }
}
export default AddBeer