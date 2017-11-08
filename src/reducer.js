const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_PHONE = "UPDATE_PHONE";
const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
const UPDATE_EDUCATION = "UPDATE_EDUCATION";
const UPDATE_SNAPCHAT = "UPDATE_SNAPCHAT";
const UPDATE_FACEBOOK = "UPDATE_FACEBOOK";
const UPDATE_INSTAGRAM = "UPDATE_INSTAGRAM";
const UPDATE_TWITTER = "UPDATE_TWITTER";




var initialState={
      firstName: 'Landon',
      lastName: 'Johnson',
      education: '',
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
            return Object.assign( {}, state, { gender: action.payload });
        case "UPDATE_COLOR":
            return Object.assign( {}, state, { color: action.payload });
        case "UPDATE_PHONE":
            return Object.assign( {}, state, { phoneNumber: action.payload });
        case "UPDATE_BIRTHDAY":
            return Object.assign( {}, state, { birthday: action.payload });
        case "UPDATE_EDUCATION":
            return Object.assign( {}, state, { education: action.payload })
        case "UPDATE_SNAPCHAT":
            return Object.assign( {}, state, { snapchat: action.payload });
        case "UPDATE_FACEBOOK":
            return Object.assign( {}, state, { facebook: action.payload });
        case "UPDATE_INSTAGRAM":
            return Object.assign( {}, state, { instagram: action.payload} );
        case "UPDATE_TWITTER":
            return Object.assign( {}, state, { twitter: action.payload} );

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

export function updateBirthdayType( birthday ) {
    return {
        type: UPDATE_BIRTHDAY,
        payload: birthday
    }
}

export function updateEducationType( education ) {
    return {
        type: UPDATE_EDUCATION,
        payload: education
    }
}

export function updateSnapchatInfo( snapchat ) {
    return {
        type: UPDATE_SNAPCHAT,
        payload: snapchat
    }
}

export function updateFacebookInfo( facebook ) {
    return {
        type: UPDATE_FACEBOOK,
        payload: facebook
    }
}

export function updateInstagramInfo( instagram ) {
    return {
        type: UPDATE_INSTAGRAM,
        payload: instagram
    }
}

export function updateTwitterInfo( twitter ) {
    return {
        type: UPDATE_TWITTER,
        payload: twitter
    }
}

export default reducer;