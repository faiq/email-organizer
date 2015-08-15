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

DragDropContext(HTML5Backend)(App)
React.render(<App />, document.querySelector('#content'))
