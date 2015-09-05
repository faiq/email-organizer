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
  constructor (props) {
    super(props)
  }

  render () { 
    const { connectDropTarget, isOver, name, lastDroppedItemm, data } = this.props
    let Emails = data.map((e, i) => {
      return <Email snippet={e.snippet} from={e.from} key={i} date={e.date} listName={e.listName} id={e.id} />
    })
    let listClass = this.props.name.toLowerCase() == "inbox" ? 'inboxList':'emailList'
    return connectDropTarget(
      <div className="three columns Emails">
        <div className="listHeader">
          <h1> {name} </h1>
        </div>
        <div className="EmailListContainer">
          <ul className={listClass}>
            {Emails}
          </ul>
        </div>
      </div>
    )
  }
}

export default DropTarget('Email', EmailTarget, collect)(EmailList)
