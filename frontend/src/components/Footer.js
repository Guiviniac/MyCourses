// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-auto py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; 2024 Minha Plataforma de Cursos. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
