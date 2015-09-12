import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5'
import { DragDropContext } from 'react-dnd'
import EmailCollection from './public/stores/EmailStore'
import ListCollection from './public/stores/ListStore'
import EmailActions from './public/actions/EmailActions'
import AddList from './public/components/AddList'
import React from 'react'
  
class App extends React.Component {
  constructor (props) { 
    super(props)
    this.state = {emailGroupings: {}, listNames: []}
  }

  componentWillMount () {
    this.props.emailStore.fetch().then((res) => {
      let data = this.mangleEmailData(res)
      this.setState({emailGroupings: data})
    }).done()
    this.props.listStore.fetch()  
  }

  componentDidMount() {
    this.props.emailStore.on('change', (email) => {
      let a = this.props.emailStore.toJSON()
      console.log(email.toJSON())
      console.log(a, typeof a)
      let data = this.mangleEmailData(a)
      this.setState({emailGroupings: data})
    },this)

    this.props.listStore.on('add', (list) => {
      let lists = this.state.listNames
      console.log(list.toJSON())
      if (!list.get('listName') == '') {
        lists.push(list.get('listName'))
        this.setState({listNames: lists})
      }
    },this)
  }

  render () {
    const { emailGroupings, listNames } = this.state
    let list = listNames.map((listName, index) => {
       let emailsInList = emailGroupings[listName]
       return <EmailList name={listName} key={index} onDrop={(item) => this.handleDrop(item, listName)} data={emailsInList}/>
    })
    return (<div> 
        <div className="row">{list}</div> 
        <AddList/>
      </div>)
  }

  handleDrop (email, listName) {
    if (email.listName != listName) EmailActions.switchEmail(email, listName)
  }

  mangleEmailData(data) { 
    let ret = {}
    Array.prototype.map.call(data, (email) => { 
      let listName = email.listName != null ? email.listName : 'inbox'
      if (ret[listName]) ret[listName].push(email)
      else ret[listName] = [email]
    })
    return ret
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App), { emailStore: new EmailCollection(), listStore: new ListCollection() }), document.body)
