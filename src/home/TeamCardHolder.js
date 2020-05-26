import React from 'react';
import {Container, CardDeck, Badge} from 'react-bootstrap';
import TeamCard from './TeamCard';
import EddyImage from '../images/eddy_image.png';
import NiphoriaImage from '../images/niphoria_image.png';
import LexiImage from '../images/lexi_image.jpg';
import ZimtiImage from '../images/zimti_image.jpg';


const containerStyle = {
    marginTop: '40px',
    marginBottom: '40px',
}

class TeamCardHolder extends React.Component {
    render() {
        return(
            <Container style={containerStyle}>
                <h1>Das Team</h1>
                <CardDeck>
                    <TeamCard name="Eddy" role={<div><Badge variant="danger">Admin</Badge> <Badge variant="warning">Entwickler</Badge></div>} image={EddyImage} link="https://silens-nox.de/user/1-eddy/"/>
                    <TeamCard name="Niphoria" role={<div><Badge variant="danger">Admin</Badge> <Badge variant="warning">Entwickler</Badge></div>} image={NiphoriaImage} link="https://silens-nox.de/user/2-niphoria/"/>
                    <TeamCard name="Lexi" role={<Badge variant="danger">Admin</Badge>} image={LexiImage} link="https://silens-nox.de/user/7-lexi/"/>
                    <TeamCard name="Zimti" role={<Badge variant="danger">Admin</Badge>} image={ZimtiImage} link="https://silens-nox.de/user/8-zimti/"/>
                </CardDeck>
            </Container>

        );
    }
}

export default TeamCardHolder;