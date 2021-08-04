import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Img1 from "../../assets/carousel1.jpg"
import Img2 from "../../assets/carousel2.jpeg"
import Img3 from "../../assets/carousel3.jpg"

import charmander from "../../assets/charmander.jpg"
import bulbassaur from "../../assets/bulbassaur.jpg"
import squirtle from "../../assets/squirtle.png"
import pikachu from "../../assets/pikachu.jpg"

import logo from "../../assets/LogoPoke.png"

const Home = () => {
    //Logica do componente

    //retornar html do componente
    return (
        <>
        {/*NAVBAR*/}
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-dark justify-content-end">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img id="logo1" src={logo} width="150" height="100"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="##navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <div class="navbar-nav">
                        <a className="nav-link" id="btn-home" aria-current="page" href="Home">HOME</a>
                        <a className="nav-link" id="btn-home" href="#myFooter">CONTATO</a>
                        <a className="nav-link" id="btn-home" href="#">LOGIN</a>
                        <a className="nav-link" id="download" href="#">DOWNLOAD</a>
                        <a className="nav-link" id="btn-register" href="#">REGISTRO</a>
                    </div>
                </div>
            </div>
        </nav>
        {/*INICIO DO CAROUSEL*/}
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 carousel-images"
                    src={Img1}
                    />
                    <Carousel.Caption className="h-50 display-2 cor-text-carousel">
                        <p>Bem vindo ao mundo pokemon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 carousel-images"
                    src={Img2}
                    />
                    <Carousel.Caption className="h-50 display-2 cor-text-carousel">
                        <p>Seja um mestre Pokemon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 carousel-images"
                    src={Img3}
                    />
                    <Carousel.Caption className="h-50 display-2 cor-text-carousel">
                        <p>Domine todos os ginásios da sua região</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        {/*FINAL DO CAROUSEL*/}
        {/*MEIO DA PAGINA*/}
        <Container className="meio">
            <h1 className="text-meio">Trailer oficial de lançamento de Pokemon GO</h1>
            <iframe width="900" height="520" src="https://www.youtube.com/embed/jM7tqHHJoeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Container>
        {/*Cards*/}
        <div className="container cards">
            {/*Card 1 Charmander*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={charmander} />
                    <Card.Body className="corpo-card">
                        <Card.Title>Charmander</Card.Title>
                            <Card.Text className="cor-texto-card">
                            Charmander é um Pokémon do Tipo Fogo e um dos Pokémon capturáveis do jogo Pokémon Go.
                            </Card.Text>
                    <Button className="botao-card" variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/*Card 2 Bulbassaur*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bulbassaur} />
                    <Card.Body className="corpo-card">
                        <Card.Title>Bulbassaur</Card.Title>
                            <Card.Text className="cor-texto-card">
                            Um dos pokemon iniciais,mais conhecido como Bulbassauro é um pokemon tipo planta.
                            </Card.Text>
                    <Button className="botao-card" variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/*Card 3 Squirtle*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={squirtle} />
                    <Card.Body className="corpo-card">
                        <Card.Title>Squirtle</Card.Title>
                            <Card.Text className="cor-texto-card">
                            Um pokemon um tanto quanto divertido e poderoso,Squirtle de agua.
                            </Card.Text>
                    <Button className="botao-card" variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/*Card 4 Pikachu*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pikachu} />
                    <Card.Body className="corpo-card">
                        <Card.Title>Pikachu</Card.Title>
                            <Card.Text className="cor-texto-card">
                            O queridinho dos fãns,Pikachu tipo elétrico,extremamente poerigoso e acima da média.
                            </Card.Text>
                    <Button className="botao-card" variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        {/*footer*/}
        <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><a href="#"><img src={logo} width="185px" height="120px"></img></a></h2>
                </div>
                <div class="col-sm-2">
                    <h5>Inicio</h5>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Sobre-nós</h5>
                    <ul>
                        <li><a href="#">Informações da Empresa</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Telefones</a></li>
                        <li><a href="#">Chat</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    </div>
                    <a href="#">
                        <button type="button" class="btn btn-default">Contato</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            
        </div>
    </footer>
        </>
    )
}

export default Home;

