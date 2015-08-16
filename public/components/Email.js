import React from 'react'
import { DragSource } from 'react-dnd'

const emailSource = {
  beginDrag(props) {
    console.log('this is props ' + JSON.stringify(props))
    return {
      from: props.from,
      snippet: props.snippet,
      date: props.date 
    }
  },
  endDrag(props, monitor) {
    let item = monitor.getItem();
    let dropResult = monitor.getDropResult();

    dropResult = JSON.stringify(dropResult)
    if (dropResult) {
      window.alert(`You dropped ${item} into ${dropResult}!`);
    }
  }
}

/**
 * Specifies which props to inject into your component.
 */
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
    const { connectDragSource, isDragging, from, date, snippet } = this.props
    return connectDragSource (<li>
      <div className="Email" draggable="true"> 
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

Email.defaultProps = { snippet: 'you got a job!', from: 'Chris Wiggins', date: '11/24/2015'}
export default DragSource('Email', emailSource, collect)(Email)
