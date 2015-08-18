import React from 'react'
import { DropTarget } from 'react-dnd';
import Email from './Email'

const EmailTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem())
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
    const { connectDropTarget, isDragging, isOver, name, lastDroppedItemm, data } = this.props
    console.log(JSON.stringify(data))
    let Emails = data.map((e, i) => <Email snippet={e.snippet} from={e.from} key={i} date={e.date} />)
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
