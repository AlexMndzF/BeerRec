import React, { Component } from "react"
import service from "../services/beers"
import BeerInfo from "../components/BeerInfo"



class getBeerId extends Component {
    constructor() {
        super()
        this.state = { beerId: [] }
        this.BeerService = new service()
    }

    componentDidMount() {
        this.BeerService.SelectedBeer(this.props.match.params.id)
            .then(response => this.setState({ ...this.state, beerId: response}))
    }

    render(){
        return(
            <div>
                <BeerInfo {...this.state.beerId}/>
            </div>
        )
    }
}

export default getBeerId