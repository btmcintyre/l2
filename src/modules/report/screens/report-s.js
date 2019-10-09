// ui component for Report module

import React from 'react';
import { connect } from 'react-redux';

import { fetchProductsPending } from '../dux/report-ar';

import Content from '../../../../node_modules/carbon-react/lib/components/content';
import Button from '../../../../node_modules/carbon-react/lib/components/button';
import Pod from '../../../../node_modules/carbon-react/lib/components/pod';
import Spinner from '../../../../node_modules/carbon-react/lib/components/spinner';

class Report extends React.Component {
  // React render 
  render() {
    return (
      <div className="report">
        <h1>Report</h1>
        <div>
          <Content title='Counter Message'>
            { this.props.counterNotes }
          </Content>
        </div>
        <br/>
        <div>
          <Content title='Table Message'>
            {this.props.tableNotes}
          </Content>
        </div>
        <br/>
        <div>
          <Pod
            as="tertiary"
            footer='Click "Load Products" below to load products from a mock API (set to take 5s to demo Async)'
          >
            {this.props.products.map(product => <li key={product.id}>{product.name}</li>)}
          </Pod>
          <br/>
        
          {this.props.pending ? (
            <Spinner/>
          ) : (
            <Button onClick={this.props.onRequestProducts}>Load Products </Button>
          )}

        </div>
        
        { this.props.productserror && <div>Error! {this.props.error.message}</div>}
      </div>
    )
  }
}

// this function is used to map the slice of app state that this component is interested in
// into it props. Any changes to this slice of app state made anywhere else in the app will automatically 
// be reflected into these props and thus appear in this components UI
function mapStateToProps(state) {
  return {
    counterNotes: state.counter.counterNotes,
    tableNotes: state.table.tableNotes,
    products: state.report.products,
    pending: state.report.pending,
    error: state.report.error
  };
}

// maps event function to dispatch the Action to the store
const mapDispatchToProps = dispatch => {
  return {
    onRequestProducts: () => dispatch(fetchProductsPending())
  };
};

// connects this report component to the store
export default connect(mapStateToProps, mapDispatchToProps)(Report);
