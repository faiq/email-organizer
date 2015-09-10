import Backbone from 'backbone'
import AppDispatcher from '../Dispatcher'
import EmailConstants from  '../constants/EmailConstants'

const Model = Backbone.Model 
const Collection = Backbone.Collection

class EmailModel extends Model { 
  constructor (options) { 
    super(options)
  }
  defaults () {
    return {
      id: '', // what we're going to index by
      from: '',
      snippet: '',
      date: '',
      listName: ''
    }    
  }
}

export default class EmailCollection extends Collection {
  constructor (options) {
    super(options)
    this.model = EmailModel
    this.url = '/emails'
    this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this))
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case EmailConstants.EMAIL_SWITCH:
        if (payload.email) {
          let email = this.get(payload.email.id)
          console.log(email.toJSON())
          email.set('listName', payload.list)
          console.log(email.toJSON())
          email.save()
          break
        }
    }
  }
}
