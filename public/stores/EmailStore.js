import { Model, Collection } from 'backbone'
import { EmailDispatcher } from '../Dispatcher'
import { EmailConstants } from  '../constants/EmailConstants'

class EmailModel extends Model { 
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
    this.url = '/Emails'
    this.dispatchToken = EmailDispatcher.register(this.dispatchCallback)
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case EmailConstants.EMAIL_SWITCH:
        let email = this.get(paylaod.email.id)
        email.listName = payload.list
        //email.save({}, {url:'/api/v1/tags/'+model.get('id')}) uncomment when we server
        this.set({email},{remove: false})
        break
    }
  }
}

// what are the events that we actually want to hanle
// 1. moving from one list to another
//    - in order to do this we need to look at
