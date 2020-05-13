import React, {Component} from 'react';
import logo from './images/logo2.png'
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import DogItem from './DogItem';

class DemoSlider extends Component {
        

    render() {
        
        const params = {
            slidesPerView: 6,
            spaceBetween: 10,
            loop: true,
            
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }

        const paneNodes = this.props.dogs.map((dog) => 
            // <div key={dog.id}>
            //     <img src={dog.photos[0].medium} alt={dog.name}  />
            // </div>
            <div key={dog.id} >
                <div className="card shadow border-0 h-100">
                  {/* <a href="#"><img src="img/mockup0.jpg" alt="" className="card-img-top" /></a> */}
                    <div className="card-body">
                        <h5> <a href="#" className="text-dark">{dog.name}</a></h5>
                          <div style={{overflow: 'hidden'}}>
                           <img src={dog.photos[0].small} alt={dog.name} />
                          </div>
                    </div>
                    <div>{dog.description}</div>
                </div>
            </div>
        );

        return(
          <section className="bg-light">
            <div className="container" style={{paddingTop: '10px'}}>
              <div className="row">
                <Swiper {...params}>
                    {paneNodes}
                </Swiper>
              </div>
            </div>
          </section>
        )
    }
}

export default DemoSlider;