import { Dispatcher } from 'flux'

class EmailDispatcher extends Dispatcher {
  constructor () {
    super()
  }
  handleViewAction (action) { 
    this.dispatch({ 
      source: 'VIEW_ACTION',
      action: action
    })
  } 
}

export default new EmailDispatcher()
