import React from 'react'
import ListActions from '../actions/ListActions' 

export default class AddList extends React.Component {
  constructor (props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.state = {}
  }
  openModal() {
    $(this.refs.modal.getDOMNode()).openModal({});
  }
  submitHandler() {
    let node = this.refs.input.getDOMNode(), 
      value = node.value
    ListActions.newList(value)
  }  
  render() {
    let style = {bottom: 24, right: 24}
    return (<div>
      <div className="fixed-action-btn" style={style}>
        <a onClick={this.openModal} className="btn-floating btn-large waves-effect waves-light red">
          <i className="large material-icons">add</i>
        </a>
      </div>
      <div ref="modal" className="modal">
        <div className="modal-content">
          <h4>Create a New List!</h4>
          <p> Insert the name of your new list below! </p>
          <div class="row">
            <input ref="input" placeholder="Placeholder" name="listName" type="text" class="validate"></input>
            <label>List Name</label>
          </div> 
            <a onClick={this.submitHandler} className="modal-action modal-close waves-effect waves-light-blue">Make My New List!</a>
        </div>
      </div>
    </div>)
  } 
}
