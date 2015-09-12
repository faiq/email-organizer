import Backbone from 'backbone'
import AppDispatcher from '../Dispatcher'
import ListConstants from  '../constants/ListConstants'

const Model = Backbone.Model 
const Collection = Backbone.Collection

class ListModel extends Model { 
  constructor (opts) {
    super(opts)
    this.urlRoot = '/lists' 
  }
  defaults () {
    return {
      listName: ''
    }
  }
}

export default class ListCollection extends Collection {
  constructor (options) {
    super(options)
    this.model = ListModel
    this.url = '/lists'
    this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this))
  }
  dispatchCallback (payload) {
    switch (payload.actionType) { 
      case ListConstants.NEW_LIST:
        let list = new ListModel()
        list.set('listName', payload.list)
        //list.save()
        this.add(list)
    }
  }
}
