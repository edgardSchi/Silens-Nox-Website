import React from 'react';
import {Container, CardDeck} from 'react-bootstrap';
import HomeCard from './HomeCard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserFriends, faCode, faHeart, faBookOpen, faUserEdit, faUsersCog} from '@fortawesome/free-solid-svg-icons';

const containerStyle = {
    marginTop: '40px',
    marginBottom: '40px',
}

class CardHolder extends React.Component {
    render() {
        return(
            <Container style={containerStyle}>
                <h1>Das macht uns aus</h1>
                <CardDeck>
                    <HomeCard title="HARDCORE RP" icon={<FontAwesomeIcon icon={faUserFriends} />} text="Wir legen viel Wert auf gutes Roleplay und versuchen alles so realistisch wie möglich zu halten."/>                       
                    <HomeCard title="EIGENE MOD" icon={<FontAwesomeIcon icon={faCode} />} text="Eine eigens erstellte Mod sorgt durch viele Modifikationen für ein besseres RP-Erlebnis."/>
                    <HomeCard title="FREUNDLICH" icon={<FontAwesomeIcon icon={faHeart} />} text="Eine freundliche Community, die bei jeden Problemen gerne hilft und aufeinander achtgibt."/>
                    <HomeCard title="EINZIGARTIGE LORE" icon={<FontAwesomeIcon icon={faBookOpen} />} text="Unsere Lore ist einzigartig und erlaubt es den Spielern die gesamte Geschichte zu erforschen."/>
                    <HomeCard title="DU BESTIMMST" icon={<FontAwesomeIcon icon={faUserEdit} />} text="Du bestimmst die Geschichte deines Charakters und auch wie er sich in Zukunft entwickelt."/>
                    <HomeCard title="ERFAHRENES TEAM" icon={<FontAwesomeIcon icon={faUsersCog} />} text="Unser Team besteht aus erfahrenden RP-Spielern, die sich mit der Materie auskennen."/>
                </CardDeck>
            </Container>

        );
    }
}

export default CardHolder;