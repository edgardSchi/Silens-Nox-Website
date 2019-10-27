import React from 'react';
import {Container} from 'react-bootstrap';
import SNLink from '../SNLink'

const containerStyle = {
    marginTop: '100px',
    marginBottom: '100px'
}

class Interesse extends React.Component {
    render() {
        return(
            <Container style={containerStyle}>
                <h1>Interesse?</h1>
                <h5>
                    Sehr schön. Als erstes solltest du dir die <SNLink text="Regeln" url=""/> anschauen und im Kopf haben. Dann kannst du dich im <SNLink text="Forum" url=""/> registrieren, wo du eine Charakterbeschreibung schreibst. Keine Sorge, das musst du nur einmal machen. Außerdem gibt es im Forum einige <SNLink text="Tipps" url=""/> zu diesem Thema.
                    Diese werden wir uns anschauen und wenn wir sie für gut befinden, dann erwartet dich noch ein Whitelistgespräch. Dabei wollen wir überprüfen wie viel RP-Erfahrung du schon hast und ob du die Regeln gründlich gelesen hast.
                    Und das wars auch schon! Sollte das Gespräch gut verlaufen, werden wir dich auf dem Server whitelisten und du darfst dich direkt ins RP stürzen.
                </h5>
            </Container>
        );
    }
}

export default Interesse;