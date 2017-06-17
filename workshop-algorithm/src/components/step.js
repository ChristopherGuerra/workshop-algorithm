import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'Get Peanut Butter, Jelly, Knife, and Loaf of Bread',
        'Open The Jars of Peanut Butter and the Jar Of Jelly',
        'Get two Slices of Bread',
        'Get Knife and Dip Knife in Jars and start spreading Peanut Butter and Jelly on both slices',
        'Press Both slices together',
        'Enjoy'
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;
