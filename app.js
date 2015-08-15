import React from 'react'
import { DragSource, DropTarget } from 'react-dnd';

class EmailList extends React.Component {
  constructor () {
    super()
  }
  render () { 
    var Emails = [<Email/>,<Email/>,<Email/>]
    return <div className="Emails">
      <h1> {this.props.name} </h1>
      <ul id="EmailList">
        {Emails}
      </ul>
    </div>
  }
}

const EmailTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem())
  }
}

DropTarget('Email', EmailTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(EmailList)

const boxSource = {
  beginDrag(props) {
    return {
      date: props.date
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Email extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
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
DragSource('Email', boxSource, collect)(Email)
React.render(<EmailList name="not read"/>, document.querySelector('#content'))
