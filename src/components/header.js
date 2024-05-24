import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from './navbars'
 
function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Gerenciamento de Projetos</Navbar.Brand>
          <Menu />
        </Container>
      </Navbar>
    );
}
 
export default Header;