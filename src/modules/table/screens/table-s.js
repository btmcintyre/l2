// ui component for Table module

import React from 'react';
import { connect } from 'react-redux';
import { tabletext } from '../dux/table-ar.js';
import Textarea from '../../../../node_modules/carbon-react/lib/components/textarea';


class Table extends React.Component {
  
  // This is an event handlers which is triggered by the ui  
  // component to dispatch actions to the store using action creators.
  // By listing these functions calls in the mapDispatchToProps object below which is passed to the react-redux connect
  // call the dispatching for us. 
  tabletext = (event) => {
    this.props.tabletext(event.target.value);
  };

  // React render 
  render() {
    return (
      <div className="table">
        <h1>Table</h1>
        <div>    
          <Textarea
           value={ this.props.tableNotes }
           label='Table Message'
           rows={2}
           inputWidth={50}
           onChange={this.tabletext}
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
    tableNotes: state.table.tableNotes
  };
}

// maps event function to dispatch the Action to the store
const mapDispatchToProps = {
  tabletext
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);