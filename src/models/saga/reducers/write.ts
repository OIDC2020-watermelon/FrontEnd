import produce from 'immer';

export interface IinitialWriteState {
  name: string;
  phoneNo: string;
  dateOfBirth: string;
  gender: string;
}

export const initialWriteState: IinitialWriteState = {
  name: '',
  phoneNo: '',
  dateOfBirth: '',
  gender: '',
};

export const writeReducer = (state = initialWriteState, action: any) => {
  switch (action.type) {
    case 'Reset': {
      return initialWriteState;
    }
    case 'ChangeName': {
      return produce(state, (draft) => {
        console.log('data', action.data);
        draft.name = action.data;
      });
    }
    case 'ChangePhoneNo': {
      return produce(state, (draft) => {
        console.log('data', action.data);
        draft.phoneNo = action.data;
      });
    }
    case 'ChangeDateOfBirth': {
      return produce(state, (draft) => {
        console.log('data', action.data);
        draft.dateOfBirth = action.data;
      });
    }
    case 'ChangeGender': {
      return produce(state, (draft) => {
        console.log('data', action.data);
        draft.gender = action.data;
      });
    }
    default:
      return state;
  }
};
