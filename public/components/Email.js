import React from 'react'
import { DragSource } from 'react-dnd'

const emailSource = {
  beginDrag(props) {
    return {
      id: props.id
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
    const { connectDragSource, isDragging, from, date, snippet, listName } = this.props
    let emailClass = listName.toLowerCase() == 'inbox' ? 'inboxEmail':'Email'
    return connectDragSource (<li>       
        <div className={emailClass} draggable="true">
        <div className="header"> 
          <div id="from"> {from} </div>
          <div id="date"> {date} </div>
        </div>  
        <div id="snippet">
          {snippet} 
        </div>
      </div>
    </li>
    )
  }
}

export default DragSource('Email', emailSource, collect)(Email)
