import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'
import { DragDropContext } from 'react-dnd'
import EmailCollection from './public/stores/EmailStore'
import EmailActions from './public/actions/EmailActions'
import React from 'react'
  
class App extends React.Component {
  constructor (props) { 
    super(props)
    this.state = {data: {}}
  }

  componentDidMount() {
    let data = this.state.data
    if (!data) {
      data = this.props.emailStore.fetch()
      data = this.mangleData(data)
    }
    this.props.emailStore.on('add', (email) => {
      let listName = email.get(listName)
      if (data[listName]) data[listName].push(email.toJSON())
      else data[listName] = [email.toJSON] 
      if (this.isMounted()) this.setState({data: data})
    })
  }

  render () {
    const { data } = this.state
    let list = data.keys().map((listName) => {
       let emailsInList = data[listName]
       return <EmailList name={listName} key={index} onDrop={(item) => this.handleDrop(item, listName)} data={emailsInList}/>
    })
    return <div className="row">{list}</div> 
  }

  handleDrop (email, listName) {
    if (email.listName != listName) EmailActions.switchEmail(email, listName)
  }

  mangleData(data) { 
    let ret = {}
    for (let email in data) { 
      
    }
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App), { emailStore: new EmailCollection () }), document.body)
