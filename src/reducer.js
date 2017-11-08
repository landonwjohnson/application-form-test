const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_PHONE = "UPDATE_PHONE";




var initialState={
      firstName: 'Landon',
      lastName: 'Johnson',
      phoneNumber: '',
      birthday: '',
      age: '',
      gender: '',
      color: 'blue',
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
            return Object.assign( {}, state, { gender: action.payload });
        case "UPDATE_COLOR":
            return Object.assign( {}, state, { color: action.payload });
        case "UPDATE_PHONE":
            return Object.assign( {}, state, { phoneNumber: action.payload });
            
        default: return state;
        }
    }

export function updateGenderType( gender ) {
    return {
        type: UPDATE_GENDER,
        payload: gender
    }
}

export function updateColorType( color ) {
    return {
        type: UPDATE_COLOR,
        payload: color
    }
}

export function updatePhoneInfo( phoneNumber ) {
    return {
        type: UPDATE_PHONE,
        payload: phoneNumber
    }
}

export default reducer;