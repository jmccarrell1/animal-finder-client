import React, {Component} from 'react';

class Photo extends Component {
    render() {
        if(this.props.photos.length > 0) {
            return (<img src={this.props.photos[0].small} />)
        }
        return (<div></div>)
    }
}

export default Photo;