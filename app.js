import React from 'react'

class EmailList extends React.Component {
  constructor () {
    super()
  }
  render () { 
    var Emails = [<Email/>,<Email/>,<Email/>]
    return <div className="Emails">
      <h1> {this.props.name} </h1>
      <ul>
        {Emails}
      </ul>
    </div>
  }

}

class Email extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(JSON.stringify(this.props))
    return <li> 
      <div className="MyComponent" draggable="true"> <header> {this.props.title} </header>  {this.props.snippet} </div>
    </li>
  }
}
Email.defaultProps = { snippet: 'default message', title: 'default title'}
React.render(<EmailList name="not read"/>, document.querySelector('#content'))
