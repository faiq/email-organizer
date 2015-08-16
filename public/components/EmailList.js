import React from 'react'
import { DropTarget } from 'react-dnd';
import Email from './Email'

const EmailTarget = {
  drop(props) {
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

   renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    )
  }

  render () { 
    const { connectDropTarget, isDragging, isOver, name } = this.props
    var Emails = [<Email snippet="hi" />,<Email snippet="hi" />,<Email snippet="hi" />]
    return connectDropTarget(
      <div className="Emails">
        <h1> {name} </h1>
        <ul id="EmailList">
          {Emails}
          {isOver && this.renderOverlay('green')}
        </ul>
      </div>
    )
  }
}

export default DropTarget('Email', EmailTarget, collect)(EmailList)
