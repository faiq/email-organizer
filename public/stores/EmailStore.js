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
    this.url = '/Emails'
    this.dispatchToken = EmailDispatcher.register(this.dispatchCallback.bind(this))
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case EmailConstants.EMAIL_SWITCH:
        if (payload.email) {
          let email = this.get(payload.email.id) || new EmailModel()
          console.log(email)
          email.set('listName', payload.list)
          //email.save({}, {url:'/api/v1/tags/'+model.get('id')}) uncomment when we server
          console.log(this)
          this.push([email], {remove: false})
          break
        }
    }
  }
  fetch() { 
    return [
        { from: 'chris wiggins', snippet: 'ayyy lmao', date: '1/1/2015', listName: 'read'},
        { from: 'chris wiggins', snippet: 'tsss papapa', date: '1/1/2015', listName: 'not read'},
        { from: 'chris wiggins', snippet: 'read thing', date: '1/1/2015', listName: 'read'}
      ]
  }
}

// what are the events that we actually want to hanle
// 1. moving from one list to another
//    - in order to do this we need to look at
