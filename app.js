/*import EmailList from './public/stores/EmailStore'
console.log(typeof EmailList)
let x = new EmailList({listName: 'read'})
console.log(x.listName)
*/
import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'
import { DragDropContext } from 'react-dnd'
import EmailCollection from './public/stores/EmailStore'
import EmailActions from './public/actions/EmailActions'
import React from 'react'
  
class App extends React.Component {
  constructor (props) { 
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log(this.props)
    this.props.emailStore.on('add', (email) => {
      this.forceUpdate()
    }, this)
  }

  render () {
    const { data } = this.state
    let list = listNames.map((listName, index) => {
      let emailsInList = emails.filter(e => e.listName == listName);
       return <EmailList name={listName} key={index} onDrop={(item) => this.handleDrop(item, listName)} data={emailsInList}/>
      
    })
    return <div className="row">{list}</div> 
  }

  handleDrop (email, listName) {
    EmailActions.switchEmail(email, listName)
    /*
    if (email.listName != listName) {
      let emailIndex = this.getEmailIndex(email)
      email.listName = listName
      let emails = this.state.emails
      emails[emailIndex] = email
      this.setState({emails: emails})
  }*/
  }

  getEmailIndex (email) {
    let emailIndex = this.state.emails.map((e, i) => { 
      if (e.from == email.from && e.snippet == email.snippet && e.date == email.date) 
        return i
    }).filter(num => typeof num === 'number')
    return emailIndex
  }
}
React.render(React.createElement(DragDropContext(HTML5Backend)(App), { emailStore: new EmailCollection () }), document.body)
