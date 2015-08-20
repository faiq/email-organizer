import { EmailDispatcher } from '../Dispatcher'
import { EmailConstants } from '../constants/EmailConstants'

const EmailActions = {
  switchEmail: function (email, newList) { 
    EmailDispatcher.dispatch({ 
      actionType: EmailConstant.EMAIL_SWITCH,
      email: email,
      list: newList
    })
  } 
}

export default EmailActions
