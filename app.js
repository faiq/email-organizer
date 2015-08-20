/*import EmailList from './public/stores/EmailStore'
console.log(typeof EmailList)
let x = new EmailList({listName: 'read'})
console.log(x.listName)
*/
import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'
import { DragDropContext } from 'react-dnd'
import { EmailCollection } from './stores/EmailStore'
import React from 'react'
  
class App extends React.Component {
  constructor (props) { 
    super(props)
    console.log(this.props.emailStore)
    this.state = {
      listNames: [
        'read', 
        'not read'
      ],
      emails: [
        { from: 'chris wiggins', snippet: 'ayyy lmao', date: '1/1/2015', listName: 'read'},
        { from: 'chris wiggins', snippet: 'tsss papapa', date: '1/1/2015', listName: 'not read'},
        { from: 'chris wiggins', snippet: 'read thing', date: '1/1/2015', listName: 'read'}
      ]
    }
  }
  render () {
    const { listNames, emails } = this.state
    let list = listNames.map((listName, index) => {
      let emailsInList = emails.filter(e => e.listName == listName);
       return <EmailList name={listName} key={index} onDrop={(item) => this.handleDrop(item, listName)} data={emailsInList}/>
      
    })
    return <div className="row"> {list} </div> 
  }
  handleDrop (email, listName) {
    if (email.listName != listName) {
      let emailIndex = this.getEmailIndex(email)
      email.listName = listName
      let emails = this.state.emails
      emails[emailIndex] = email
      this.setState({emails: emails})
  }
  }
  getEmailIndex (email) {
    let emailIndex = this.state.emails.map((e, i) => { 
      if (e.from == email.from && e.snippet == email.snippet && e.date == email.date) 
        return i
    }).filter(num => typeof num === 'number')
    return emailIndex
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App), { emailStore: EmailCollection }), document.body)
