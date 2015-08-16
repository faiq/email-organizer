import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';
import React from 'react'
import update from 'react/lib/update';
  
class App extends React.Component {
  constructor (props) { 
    this.state {
      listNames: [
        'read', 
        'not read'
      ]
      emails: [
        { from: 'chris wiggins', snippet: 'ayyy lmao', date: '1/1/2015', listName: 'read'},
        { from: 'chris wiggins', snippet: 'tsss papapa', date: '1/1/2015', listName: 'not read'},
        { from: 'chris wiggins', snippet: 'not read thing', date: '1/1/2015', listName: 'read'}
      ]
    }
  }
  render () {
    const { listNames, emails } = this.state
    let list = data.map(function (listName, index) { 
      return  <EmailList name={listName} key={index} onDrop=handleDrop/>
    })
    return <div> {list} </div>
  }
  handleDrop 
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App)), document.querySelector('#content'))
