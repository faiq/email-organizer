import React from 'react'
import $ from 'jquery'

class EmailList extends React.Component {
  constructor () {
    super()
  }
  render () { 
    var Emails = [<Email/>,<Email/>,<Email/>]
    return <div className="Emails">
      <h1> {this.props.name} </h1>
      <ul id="EmailList" onDragOver={this.dragOver}>
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
      <div className="Email" draggable="true"> 
        <div className="header"> 
          <div id="from"> {this.props.from} </div>  
          <div id="date"> {this.props.date} </div>
        </div>  
        <div id="snippet">
          {this.props.snippet} 
        </div>
      </div>
    </li>
  }
}
Email.defaultProps = { snippet: 'you got a job!', from: 'Chris Wiggins', date: '11/24/2015'}
React.render(<EmailList name="not read"/>, document.querySelector('#content'))
