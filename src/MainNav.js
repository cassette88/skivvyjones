import React, { Component } from 'react'
import Landing from './Landing';
import Stats from './Stats';
import Inspiration from './Inspiration';


export default class MainNav extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            portion: <Landing/>
        }
    }

toggle(portion){
    switch(portion){
        case 'Home':
        this.setState({portion: <Landing/>});
            break;
        case 'Stats':
        this.setState({portion: <Stats/>});
            break;
        case 'Inspiration':
        this.setState({portion: <Inspiration/>});
            break;
        default: 
            return portion;
    }
}

  render() {
    return (
        <div>
            <div className="d-flex flex-row justify-content-center" >
                <div>
                <ul className="nav justify-content-center">
                <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.toggle.bind(this, 'Home')}>Home</button>
                <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.toggle.bind(this, 'Inspiration')}>Inspiration</button>
                <button type="button" className="btn btn-outline-primary nav-item navspace" onClick={this.toggle.bind(this, 'Stats')}>Stats</button>

                    </ul>
                
                </div>
            </div>
      <div>
        {this.state.portion}
      </div>
      </div>
    )
  }
}
