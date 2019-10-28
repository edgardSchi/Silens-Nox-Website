import React from 'react';
import Image from 'react-bootstrap/Image';
import picture from '../images/dayz_wallpaper.jpg';
import {Container, Button, Jumbotron} from 'react-bootstrap';


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

const buttonStyle = {
    //borderColor: '#af0404',
    //color: '#af0404',
    marginTop: '30px',
    width: '200px',
    height: '50px'
}

class TopPicture extends React.Component {
    render() {
        return (
            <Jumbotron style={style} fluid>
                <Container>

                    <h1 style={textStyle}>Silens Nox</h1>
                    <h2 style={{color: '#af0404'}}>Deutsche DayZ Hardcore RP Community</h2>
                    <>
                    <style>
                        {`
                            .sn-button {
                                color: #af0404;
                                background-color: transparent;
                                border-color: #af0404;
                            }

                            .sn-button:hover {
                                color: white;
                                border-color: #af0404;
                                background-color: #af0404;
                            }

                            .sn-button:active {
                                decoration: none;
                                background-color: #af0404;
                            }
                        `}
                    </style>
                    <Button className="sn-button" style={buttonStyle}>Spielen</Button>
                    </>
                    
                </Container>
            </Jumbotron>
        )
    }
}

export default TopPicture;