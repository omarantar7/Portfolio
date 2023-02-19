import React,{ useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const enum Reducer_Action_Type{
    INPUT,
    BLUR,
    RESET
}

type Reducer_Action={
    type:Reducer_Action_Type,
    value:string
}

const inputStateReducer = (state:typeof initialInputState,action:Reducer_Action):typeof initialInputState => {
  switch(action.type){
    case Reducer_Action_Type.INPUT:
        return {value: action.value, isTouched: state.isTouched};
    case Reducer_Action_Type.BLUR:
        return {isTouched: true, value: state.value};
    case Reducer_Action_Type.RESET:
        return {isTouched: false, value: ''};
    default:
        throw new Error('Somthing went wrong');
  }
//     if (action.type === 'INPUT') {
//     return { value: action.value, isTouched: state.isTouched };
//   }
//   if (action.type === 'BLUR') {
//     return { isTouched: true, value: state.value };
//   }
//   if (action.type === 'RESET') {
//     return { isTouched: false, value: '' };
//   }
//   return inputStateReducer;
};

const useInput = (validateValue:any) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Reducer_Action_Type.INPUT, value: event.target.value });
  };

  const inputBlurHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Reducer_Action_Type.BLUR , value:''});
  };

  const reset = () => {
    dispatch({ type: Reducer_Action_Type.RESET,value:'' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;