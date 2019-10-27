import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends, faCode, faHeart} from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
    height: '40px',
    background: 'black',
    color: 'white',
    width: '100%'
}

const textStyle = {
    paddingTop: '12px',
    fontSize: '14px',
    //margin: '10px'
}

class Footer extends React.Component {
    render() {
        return (
            <Container style={containerStyle} fluid>
                <Row>
                    <Col className="text-md-left">
                        <h6 style={textStyle}>Made with <FontAwesomeIcon icon={faHeart} /> by Eddy</h6>
                    </Col>
                    <Col className="text-md-right" md="auto">
                        <h6 style={textStyle}>Impressum</h6>                                
                    </Col>
                    <Col className="text-md-right" md="auto">
                        <h6 style={textStyle}>Datenschutz</h6>
                    </Col>
                  </Row>
              </Container>
        );
    }
}

export default Footer;