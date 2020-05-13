import React, {Component} from 'react';
import DogItem from './DogItem';

class Dogs extends Component {
    render() {
        return this.props.dogs.map(
            (dog) => (<DogItem key={dog.id} dog={dog}/>))
    }
}

export default Dogs;