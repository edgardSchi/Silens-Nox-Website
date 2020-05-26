import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import SNLink from '../SNLink'
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faSteam, faTeamspeak} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const containerStyle = {
    marginTop: '100px',
    marginBottom: '100px'
}

const iconStyle = {
    fontSize: '60px',

}

class Interesse extends React.Component {
    render() {
        return(
            <Container style={containerStyle}>
                <h1 style={{marginBottom: '40px'}}>Interesse?</h1>
                <Row>
                    <Col>
                        <a href="">
                            <FontAwesomeIcon icon={faSteam} style={iconStyle}/>
                        </a>
                        
                    </Col>
                    <Col>
                        <a href="https://silens-nox.de/forum">
                            <FontAwesomeIcon icon={faGlobe} style={iconStyle}/>
                            <h2>Forum</h2>
                        </a>
                    </Col>
                    <Col>
                        <a href="ts3server://ts.silens-nox.de">
                            <FontAwesomeIcon icon={faTeamspeak} style={iconStyle}/>
                        </a>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default Interesse;