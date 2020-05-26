import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends, faCode, faHeart} from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
    height: '40px',
    background: '#414141',
    color: 'white',
    width: '100%'
}

const textStyle = {
    paddingTop: '12px',
    fontSize: '14px',
    //margin: '10px'
    color: '#F8F8F8',
}

class Footer extends React.Component {
    render() {
        return (
            <Container style={containerStyle} fluid>
                <Row>
                    <Col className="text-md-left">
                        <a href="https://github.com/edgardSchi" target="_blank"><h6 style={textStyle}>Made with <FontAwesomeIcon icon={faHeart} /> by Eddy</h6></a>
                    </Col>
                    <Col className="text-md-right" md="auto">
                        <a href="https://silens-nox.de/legal-notice/"><h6 style={textStyle}>Impressum</h6></a>                                
                    </Col>
                    <Col className="text-md-right" md="auto">
                        <a href="https://silens-nox.de/datenschutzerklaerung/"><h6 style={textStyle}>Datenschutz</h6></a>
                    </Col>
                  </Row>
              </Container>
        );
    }
}

export default Footer;