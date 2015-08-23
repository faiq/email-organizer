import Backbone from 'backbone'
import EmailDispatcher from '../Dispatcher'
import EmailConstants from  '../constants/EmailConstants'

const Model = Backbone.Model 
const Collection = Backbone.Collection

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
    this.url = '/emails'
    this.dispatchToken = EmailDispatcher.register(this.dispatchCallback.bind(this))
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case EmailConstants.EMAIL_SWITCH:
        if (payload.email) {
          let email = this.get(payload.email.id) || new EmailModel()
          console.log(email.toJSON())
          email.set('listName', payload.list)
          //email.save({}, {url:'/api/v1/tags/'+model.get('id')}) uncomment when we server
          this.set({email}, {remove: false})
          break
        }
    }
  }
}
