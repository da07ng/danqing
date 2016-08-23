import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AccountActions from '../../actions/account';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { account, actions, children } = this.props;

    return (
      <div>
        <Header account={account} actions={actions}/>
        <div id='main'>
          <div className="container">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AccountActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
