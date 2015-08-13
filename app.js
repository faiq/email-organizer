import React from 'react'

class EmailList extends React.Component {
  constructor () {
    super()
    this.props = {
      name: 'Email List'
    }
  }
  render () { 
    var Emails = [<Email></Email>]
    return <div className="Emails">
      <h1> {this.props.name} </h1> 
      {Emails} 
    </div>
  }
}

class Email extends React.Component {
  constructor () {
    super()
    this.props = {
      snippet: 'hey wassup hello'
    }
  }
  render () {
    console.log(JSON.stringify(this.props))
    return <div>
      <h1> {this.props.snippet} </h1>
    </div>
  } 
}

React.render(<Email snippet="hi"/>, document.querySelector('#content'))
/*
class App extends React.Component {
  constructor () {
    super()
    this.state = { n: 0 }
  }
  render () {
    return <div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
    </div>
  }
  handleClick () {
    this.setState({ n: this.state.n + 1 })
  }
}
React.render(<App />, document.querySelector('#content'))
*/
