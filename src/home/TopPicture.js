import React from 'react';
import Image from 'react-bootstrap/Image';
import picture from '../images/wallpaper_2.jpg';
import {Container, Button, Jumbotron} from 'react-bootstrap';
import Logo from '../images/logo.png';


const style = {
    //maxHeight: "100%",
    width: "100%",
    //background: 'black',
    backgroundImage: `url(${picture})`,
    backgroundPosition: '50% 25%',
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

                    <Image src={Logo} fluid/>
                    <h2 style={{color: '#afff'}}>Deutsche DayZ Hardcore RP Community</h2>
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
                    <a href={"https://silens-nox.de/forum/thread/6-wie-kann-ich-auf-dem-server-spielen/"}><Button className="sn-button" variant="outline-danger"style={buttonStyle} >Spielen</Button></a>
                    </>
                    
                </Container>
            </Jumbotron>
        )
    }
}

export default TopPicture;