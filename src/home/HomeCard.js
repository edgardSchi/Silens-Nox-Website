import React from 'react';
import {Card} from 'react-bootstrap';

const iconStyle = {
    fontSize: '60px',
    color: '#af0404',
    //borderColor: '#dc143c',
}

const titleStyle = {

}

class HomeCard extends React.Component {
    render() {
        return(
            <Card className="text-center" style={{margin: '20px', minWidth: '250px', borderColor: '#af0404', backgroundColor: '#252525'}}>
                <Card.Body>
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Title style={iconStyle}>                    
                        {this.props.icon}
                    </Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HomeCard;