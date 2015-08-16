import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';
import React from 'react'
  
class App {
  getEmailLists () { 
    this.state = {data:['read', 'not read']}
  }
  render () {
    this.getEmailLists()
    const { data } = this.state
    let list = data.map(function (listName, index) { 
      return  <EmailList name={listName} key={index} />
    })
    return <div> {list} </div>
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App)), document.querySelector('#content'))
