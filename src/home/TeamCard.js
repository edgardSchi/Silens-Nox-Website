import React from 'react';
import {Card, Image} from 'react-bootstrap';

const iconStyle = {
    fontSize: '60px',
}

const titleStyle = {

}

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }
    

    render() {
        return(
            <Card className="text-center" onMouseOver={() => this.setState({hovered: true})} onMouseOut={() => this.setState({hovered: false})} style={{cursor:'pointer', margin: '20px', transform: `${this.state.hovered ? 'scale(1.1, 1.1)' : 'scale(1, 1)'}`}}>
                <Card.Body>
                    <Image src={this.props.image} roundedCircle fluid style={{width: '100px'}}/>
                    <Card.Title>
                        {this.props.name}
                    </Card.Title>
                    <Card.Text style={{fontSize: '18px'}}>
                        {this.props.role}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default TeamCard;