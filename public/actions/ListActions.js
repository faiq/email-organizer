import AppDispatcher from '../Dispatcher'
import ListConstants from '../constants/ListConstants'

const ListActions = {
  newList: function (list) { 
    AppDispatcher.dispatch({ 
      actionType: ListConstants.NEW_LIST,
      list: list
    })
  },
  deleteList: function (list) { 
    AppDispatcher.dispatch({ 
      actionType: ListConstants.DELETE_LIST,
      list: list
    })
  } 
}

export default ListActions
