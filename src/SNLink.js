import React from 'react';

const style = {
    textDecoration: 'none',
}

class SNLink extends React.Component {
    render() {
        return(
            <a href={this.props.url} target="_blank" style={style}>{this.props.text}</a>
        );
    }
}

export default SNLink;