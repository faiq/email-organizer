import React from 'react'
import { DropTarget } from 'react-dnd';
import Email from './Email'

const EmailTarget = {
  drop(props) {
    console.log(arguments)
    return { name: props.name }
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class EmailList extends React.Component {
  constructor () {
    super()
  }

  render () { 
    const { connectDropTarget, isDragging, isOver, name } = this.props
    var Emails = [<Email snippet="hi" />,<Email snippet="hi" />,<Email snippet="hi" />]
    return connectDropTarget(
      <div className="Emails">
        <h1> {name} </h1>
        <ul id="EmailList">
          {Emails}
        </ul>
      </div>
    )
  }
}

export default DropTarget('Email', EmailTarget, collect)(EmailList)
