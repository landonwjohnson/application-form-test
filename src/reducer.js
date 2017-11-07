const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_WEIGHT = "UPDATE_WEIGHT";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDTATE_LAST";
const UPDATE_PHONE = "UPDATE_PHONE"



var initialState={
      firstName: '',
      lastName: '',
      phoneNumber: '',
      birthday: '',
      age: '',
      gender: '',
      color: '',
      city: '',
      usaState: '',
      weight: '',
      facebook: '',
      instagram: '',
      snapchat: '',
      phoneNumber: '',
      zip: ''
}

function reducer(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {
        case "UPDATE_GENDER":
            return Object.assign( {}, state, { loanType: action.payload });
        case "UPDATE_COLOR":
            return Object.assign( {}, state, { propertyType: action.payload });
        default: return state;
        }
    }

export function updateGenderType( genderType ) {
    return {
        type: UPDATE_GENDER,
        payload: genderType
    }
}