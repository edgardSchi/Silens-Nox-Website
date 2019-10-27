import React from 'react';
import Image from 'react-bootstrap/Image';
import picture from '../images/dayz_wallpaper.png';
import {Container, Row, Col, ResponsiveEmbed, Jumbotron} from 'react-bootstrap';


const style = {
    //maxHeight: "100%",
    width: "100%",
    //background: 'black',
    backgroundImage: `url(${picture})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    paddingTop: '230px',
    paddingBottom: '230px',
}

const textStyle = {
    color: 'white',
    fontSize: '100px',
}

class TopPicture extends React.Component {
    render() {
        return (
            <Jumbotron style={style} fluid>
                <Container>
                    <h1 style={textStyle}>Silens Nox</h1>
                    <h2 style={{color: 'red'}}>Deutsche DayZ Hardcore RP Community</h2>
                </Container>
            </Jumbotron>
        )
    }
}

export default TopPicture;