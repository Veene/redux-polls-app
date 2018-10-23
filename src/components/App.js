import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        {this.props.loading === true ? null :
        <Dashboard />
        }
      </div>
    )
  }
}

function mapStatetoProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStatetoProps)(App)