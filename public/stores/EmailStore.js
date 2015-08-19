import { Model, Collection } from 'backbone'

class Email extends Model { 
  defaults () {
    return {
      from: '',
      snippet: '',
      date: '',
      listName: ''
    }    
  }
}

export default class EmailList extends Collection {
  constructor (options) {
    super(options)
    this.model = Email
    this.listName = options.listName
    this.url = '/Emails/' + options.listName
    this.dispatchToken = EmailDispatcher.register(this.dispatchCallback)
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case 'email-remove': 
        this.remove(payload.email)
        break
    }
  }
}
