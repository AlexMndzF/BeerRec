import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Carousel,} from "react-bootstrap"

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} s>
                <Carousel.Item>
                    <img style={{ height: '95vh' }}
                        className="d-block w-100"
                        src="/beers.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{bottom:'50vh'}}>
                        <h3 className="homeTitle">🍻All Beers!🍻</h3>
                        <p className="homeText">En esta seccion podras encontrar la informacion de todas las cerveza disponobles!</p>
                        <Link className="AllBeersButton" to="/all-beers">All Beers</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '95vh' }}
                        className="d-block w-100"
                        src="/new_beer.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{bottom:'50vh'}}>
                        <h3 className="homeTitle">New beer!</h3>
                        <p className="homeText">En esta seccion podras añadir nuevas cervezas!</p>
                        <Link className="AllBeersButton" to="/new-beer">New Beers</Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '95vh' }}
                        className="d-block w-100"
                        src="/random_beer.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{bottom:'50vh'}}>
                        <h3 className="homeTitle">Random beer!</h3>
                        <p className="homeText">Dejate sorprender por una cerveza aleatoria!</p>
                        <Link className="AllBeersButton" to="/random-beer">Random Beer</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Home