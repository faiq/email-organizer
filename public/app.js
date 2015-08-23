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

  componentWillMount () {
    this.props.emailStore.fetch().then((res) => {
      let data = this.mangleData(res)
      this.setState({data: data})
    }).done()
  }

  componentDidMount() {
    this.props.emailStore.on('change', (email) => {
      let listName = email.get('listName')
      if (data[listName]) data[listName].push(email.toJSON())
      else data[listName] = [email.toJSON()]
      this.setState({data: data})
    })
  }

  render () {
    const { data } = this.state
    let list = Object.keys(data).map((listName, index) => {
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
    data.map((email) => { 
      let listName = email.listName != null ? email.listName : 'inbox'
      if (ret[listName]) ret[listName].push(email)
      else ret[listName] = [email]
    })
    return ret
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App), { emailStore: new EmailCollection () }), document.body)
