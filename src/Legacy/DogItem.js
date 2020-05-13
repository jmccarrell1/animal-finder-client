import React, { Component } from 'react';
import Photo from './Photo';

class DogItem extends Component {
    render() {
        //console.log(this.props.dog.photos[0].small)



        return (
            <div>
                <div>{this.props.dog.name}</div>
                <div><a href={this.props.dog.url} >Organization</a></div>
                <Photo photos={this.props.dog.photos}></Photo>
            </div>
        )
    }
}

export default DogItem;