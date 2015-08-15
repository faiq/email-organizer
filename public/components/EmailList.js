import React from 'react'
import DropTarget from 'react-dnd';
import Email from './Email'

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

