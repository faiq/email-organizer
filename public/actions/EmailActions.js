import AppDispatcher from '../Dispatcher'
import EmailConstants from '../constants/EmailConstants'

const EmailActions = {
  switchEmail: function (email, newList) { 
    AppDispatcher.dispatch({ 
      actionType: EmailConstants.EMAIL_SWITCH,
      email: email,
      list: newList
    })
  } 
}

export default EmailActions
