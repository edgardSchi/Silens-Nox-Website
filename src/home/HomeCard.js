import React from 'react';
import {Card} from 'react-bootstrap';
import {faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const iconStyle = {
    fontSize: '60px',
}

const titleStyle = {

}

class HomeCard extends React.Component {
    render() {
        return(
            <Card className="text-center" style={{margin: '20px', minWidth: '250px'}}>
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