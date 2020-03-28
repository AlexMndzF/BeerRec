import axios from "axios"

export default class services {
    constructor() {
        this.services = axios.create({
            baseURL: 'https://ih-beer-api.herokuapp.com/beers'
        })
    }
    GetAllBeers = () => {
        return this.services.get("/")
            .then(response => response.data)
            .catch(error => error.data)
    }
    AddBeer = (beer) => {
        return this.services.post("/new", beer)
            .then(response => response.data)
            .catch(error => error.data)
    }
    RandomBeer = () => {
        return this.services.get("/random")
            .then(response=>response.data)
            .catch(error=>error.data)
    }
    SelectedBeer = (id) =>{
        return this.services.get(`/${id}`)
            .then(response=>response.data)
            .catch(error=>error.data)
    }
}