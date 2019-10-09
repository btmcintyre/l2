// ui component

import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement,  reset, counterText} from '../dux/counter-ar.js';
import Button from '../../../../node_modules/carbon-react/lib/components/button';
import Textarea from '../../../../node_modules/carbon-react/lib/components/textarea';
import Textbox from '../../../../node_modules/carbon-react/lib/components/textbox';


class Counter extends React.Component {
  
  // local state just for this component
  state = {name: "Counter Screen"}

  // event handler to update local state  
  handleUpdate = (event) => {
    this.setState({ name: event.target.value })
  }

  // These are the event handlers which are triggered by the ui component to dispatch actions to the 
  // store using action creators.
  // By listing these functions calls in the mapDispatchToProps object below which is passed to the react-redux connect
  // call it does the dispatching for us. 
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  // this counterText
  counterText = (e) => {
    this.props.counterText(e.target.value);
  };

  // React render 
  render() {
    return (
      <div className="counter">    
        <Textbox
          defaultValue={this.state.name}
          inputWidth={25}
          label="Enter Counter Screen's Title... (this value is held in local component state)"
          onBlur={this.handleUpdate}
        />

        <h1>{this.state.name} - {this.props.name}</h1>
        <div>
          <Button onClick={this.decrement}>-</Button>
          <span>  {this.props.count}  </span>
          <Button onClick={this.increment}>+</Button>
          <Button className='reset-button' onClick={this.reset}>RESET!</Button>
        </div>
   
        <div>
          <Textarea
           value={ this.props.counterNotes }
           label='Counter Message'
           rows={2}
           inputWidth={50}
           onChange={this.counterText}
          />
        </div>
      </div>
    )
  }
}

// this function is used to map the slice of app state that this component is interested in
// into its props. Any changes to this slice of app state made anywhere else in the app will automatically 
// be reflected into these props and thus appear in this components UI
function mapStateToProps(state) {
  return {
    count: state.counter.count,
    name: state.counter.name,
    counterNotes: state.counter.counterNotes
  };
}

// maps event function to dispatch the Action to the store
const mapDispatchToProps = {
  increment, decrement, reset, counterText
}

// connects this counter component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
