//  Importações do Bootstrap
import { Navbar, Nav, NavDropdown, Row, Col, Stack } from "react-bootstrap";

//  Importações de Estilos
import './index.css';

//  Importações do React
import React from "react";
import { Link } from 'react-router-dom';

export const CabecalhoRodape = (props) => {

  return <>
    <header>
      <Row>
        <Col md={10}>
          <h1>E-Store</h1>
        </Col>
        <Col md={2} className="bemVindo">
          <p>Bem-vindo(a)</p>
          <Link className="bemVindo" to="">Entre ou cadastre-se</Link>
        </Col>
      </Row>
      
      <div className="menu">
        <Row>
          <Col md={1}>
            <NavDropdown title="Vendedor" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">Cadastrar Produto</NavDropdown.Item>
              <NavDropdown.Item href="lista">Lista de Produtos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Entrar</NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col md={9}>
            <Navbar variant="dark">
              <Nav className="md-auto"> 
                <Nav.Link href="">Eletrodomésticos</Nav.Link>
                <Nav.Link href="">Informática</Nav.Link>
                <Nav.Link href="">Móveis e Decoração</Nav.Link>
                <Nav.Link href="">Vestuário</Nav.Link>
                <Nav.Link href="">Cosméticos</Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col md={2}>
            <Link to=""><img src="https://img.icons8.com/ios/35/ffffff/shopping-cart.png" alt="Carrinho de compras"/></Link>
          </Col>
        </Row>
      </div>
    </header>

    <main>{props.children}</main>

    <footer>
      <Row>
        <Col>
          <Navbar variant="dark"> 
            <Nav className="md-auto">
              <Nav.Link href="">Trabalhe conosco</Nav.Link>
              <Nav.Link href="">Termos e condições</Nav.Link>
              <Nav.Link href="">Como cuidamos da sua privacidade</Nav.Link>
              <Nav.Link href="">Contato</Nav.Link>
            </Nav>
          </Navbar>
        </Col>

      </Row>
      <Row>
        <Col md={10}>
          <Stack direction="horizontal" gap={3}>
            <div>
              <img src="https://img.icons8.com/ios/25/ffffff/address--v1.png" alt="Endereço"/>
              &emsp;Endereço
            </div>
            <div>
              <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/25/ffffff/external-telephone-communication-nawicon-detailed-outline-nawicon.png" alt="Telefone"/>
              &emsp;Telefone
            </div>
            <div>
              <img src="https://img.icons8.com/ios/25/ffffff/new-post.png" alt="Email"/>
              &emsp;E-mail
            </div>
          </Stack>
        </Col>

        <Col md={2}>
          <p>All Rights Reserved</p>
        </Col>
      </Row>
    </footer>
  </>
}
