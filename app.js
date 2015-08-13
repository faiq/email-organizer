import React from 'react'

/*class EmailList extends React.Component {
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
    return <div>
      <b> {this.props.snippet} </b>
    </div>
  } 
}

React.render(<Email />, document.querySelector('#content'))
*/
import React from 'react'

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
