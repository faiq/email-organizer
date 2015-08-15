import EmailList from './public/components/EmailList'
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import { DragDropContext } from 'react-dnd';
import React from 'react'
  
class App {
  render () {
    return <div>
      <EmailList name="not read"/>
    </div>
  }
}

React.render(React.createElement(DragDropContext(HTML5Backend)(App)), document.querySelector('#content'))
