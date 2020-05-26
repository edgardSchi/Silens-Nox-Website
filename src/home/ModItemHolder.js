import React from 'react';
import {Container} from 'react-bootstrap';
import ModItem from './ModItem';

const containerStyle = {
    marginTop: '40px',
    marginBottom: '40px',
}

class ModItemHolder extends React.Component {

    render() {
        return(
            <Container style={containerStyle}>
                <h1>Unsere Mod</h1>
                <ModItem title="Bugfixes und RP-Änderungen" text="Wir haben einige Bugs in DayZ gefixed und dazu noch weitere Funktionen geändert, die das RP fördern. Zum Beispiel ist die Trinkgeschwindigkeit verlangsamt worden, damit 1 Liter Wasser nicht in 10 Sekunden getrunken werden kann."/>
                <ModItem title="Roleplay-Items" text="Es wurden einige neue Items nur für das RP hinzugefügt. Dazu gehören zum Beispiel eine Boombox, ein Schußübungsziel und weitere."/>
                <ModItem title="Neue Waffen" text="Wir haben einige Waffen, die früher in DayZ vorhanden waren wieder ins Spiel gebracht. Dazu kommen noch Waffen, die wir selbst erstellt haben."/>
                <ModItem title="Funktionierende Gasmasken" text="Wir nutzen die Erweiterung 'Medical Attention' für toxische Zonen und haben dazu die Gasmasken mit funktionierenden Filtern erweitert. Das heißt, dass eine Gasmaske sinnlos ist, wenn kein Filter an ihr angebracht ist, welcher sich bei Nutzung auch verbraucht." />
                <ModItem title="Autoschlüssel" text="Bei uns besitzt jedes Auto einen einzigartigen Schlüssel, der nur bei einem bestimmten Fahrzeug funktioniert. Ohne Schlüssel kann das Auto nicht gestartet werden."/>
                <ModItem title="Emotewheel" text="Wir haben das vanilla Emotewheel mit weiteren Emotes, wie zum Beispiel husten, lachen und vielen weiteren, erweitert." />
                <ModItem title="Verbrauchbare Zigaretten" text="Unsere Zigaretten verbrauchen sich, wenn sie geraucht werden. Es existieren also keine unendlichen Zigaretten mehr." />

            </Container>
        );
    }
}

export default ModItemHolder;