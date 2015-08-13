import React from 'react'

class EmailList extends React.Component {
  constructor () {
    super()
  }
  render () { 
    return <div className="Emails">
  }
}

class Email extends React.Component {
  constructor (arg) {
    super()
    this.props = function () {
      return {
        snippet = 'hey wassup hello'
      }
    }
  }
  render () {
    return <div>
      <b> {this.props.snippet} </b>
    </div>
  } 
}

React.render(<EmailList/>, document.querySelector('#content')
