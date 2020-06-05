import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from './types';
//import * as firebase from 'firebase';
import {firebaseAuth} from '../../config/config.js'

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text =>{
    return{
        type: PASSWORD_CHANGED,
        payload:text
    }
}

export const loginUser = ({email, password}) =>{
    return(dispatch)=>{
        dispatch({type: LOGIN_USER})
   firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(user => loginUserSuccess(dispatch, user) )
    .catch(()=>{
        firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then(user=>loginUserSuccess(dispatch, user))
        .catch(()=> loginUserFail(dispatch))
    })
    
    }
}
//YE bhi hm ne aik helper func banaya he agr fail ho jaye to 
const loginUserFail = (dispatch) =>{
    dispatch({type:LOGIN_USER_FAIL})
}


//kyn ke ye bohut lamba ho raha tha or do dafa likhna parh raha tha iis lie aik dosra helper function banaya
const loginUserSuccess= (dispatch, user)=>{
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload:user
    })
}