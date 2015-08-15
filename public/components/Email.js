import React from 'react'
import DragSource from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      date: props.date
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert(`You dropped ${item.name} into ${dropResult.name}!`);
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
    const { connectDragSource } = this.props
    return connectDragSource (<li> 
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
    )
  }
}
Email.defaultProps = { snippet: 'you got a job!', from: 'Chris Wiggins', date: '11/24/2015'}
DragSource('Email', boxSource, collect)(Email)
