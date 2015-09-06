import React from 'react'

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
    let val = this.refs.input.getDOMNode()
    console.log(val.value)
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
          <div class="row">
            <input ref="input" placeholder="Placeholder" id="first_name" type="text" class="validate"></input>
            <label>List Name</label>
            <a onClick={this.submitHandler} className="modal-action modal-close waves-effect waves-green btn-flat">Done</a>
          </div> 
        </div>
      </div>
    </div>)
  } 
}
