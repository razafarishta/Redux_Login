import {EMAIL_CHANGED , PASSWORD_CHANGED ,LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../actions/types';

const INITIAL_STATE = {
  email: '',
 password: '',
 user:null,
 error:'',
 loading:false

};
export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
      case PASSWORD_CHANGED:
        return{...state, password:action.payload};
        case LOGIN_USER:
          return{...state, loading:true, error:''}
        case LOGIN_USER_SUCCESS:
          return {...state, ...INITIAL_STATE,user: action.payload, };// KYN KE Sare initial state wale hi state
          case LOGIN_USER_FAIL:                                       //bun rahi thi is lie spread op bana ke dall di 
            return{ ...state, error: 'Authentication Failed', password:'', loading:false}
            
    default:
      return state;
  }
};
