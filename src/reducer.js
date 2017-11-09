//Login
const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
const UPDATE_AGE = "UPDATE_AGE";
//Basics
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_COLOR = "UPDATE_COLOR";
const UPDATE_PICTURE1 = "UPDATE_PICTURE1";
const UPDATE_PICTURE2 = "UPDATE_PICTURE2";
const UPDATE_PICTURE3 = "UPDATE_PICTURE3";
const UPDATE_PICTURE4 = "UPDATE_PICTURE4";
//Career
const UPDATE_EDUCATION = "UPDATE_EDUCATION";
//ContactInfo
const UPDATE_SNAPCHAT = "UPDATE_SNAPCHAT";
const UPDATE_FACEBOOK = "UPDATE_FACEBOOK";
const UPDATE_INSTAGRAM = "UPDATE_INSTAGRAM";
const UPDATE_TWITTER = "UPDATE_TWITTER";
const UPDATE_PHONE = "UPDATE_PHONE";
//Lifestyle
const UPDATE_WEIGHT = "UPDATE_WEIGHT";
const UPDATE_HEIGHT = "UPDATE_HEIGHT";
const UPDATE_SMOKES = "UPDATE_SMOKES";
const UPDATE_DRINKS = "UPDATE_DRINKS";
const UPDATE_BMI = "UPDATE_BMI"






var initialState={
      picture1: '',
      firstName: '',
      lastName: '',
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
      zip: '',
      smokes: '',
      drinks: '',
      bmi: ''
}

function reducer(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch(action.type) {
        case "UPDATE_PICTURE1":
            return Object.assign( {}, state, { picture1: action.payload })
        case "UPDATE_FIRST":
            return Object.assign( {}, state, { firstName: action.payload });
        case "UPDATE_LAST":
            return Object.assign( {}, state, { lastName: action.payload });
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
        case "UPDATE_HEIGHT":
            return Object.assign( {}, state, { height: action.payload} );
        case "UPDATE_WEIGHT":
            return Object.assign( {}, state, { weight: action.payload} );
        case "UPDATE_SMOKES":
            return Object.assign( {}, state, { smokes: action.payload} );
        case "UPDATE_DRINKS":
            return Object.assign( {}, state, { drinks: action.payload} );
        case "UPDATE_BMI":
            return Object.assign( {}, state, { bmi: action.payload} );


        default: return state;
        }
    }

export function updatePicture1( picture1 ) {
        return {
            type: UPDATE_PICTURE1,
            payload: picture1
        }
    }

export function updateFirstNameType( firstName ) {
    return {
        type: UPDATE_FIRST,
        payload: firstName
    }
}

export function updateLastNameType( lastName ) {
    return {
        type: UPDATE_LAST,
        payload: lastName
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

export function updateDrinksType( drinks ) {
    return {
        type: UPDATE_DRINKS,
        payload: drinks
    }
}

export function updateSmokesType( smokes ) {
    return {
        type: UPDATE_SMOKES,
        payload: smokes
    }
}

export function updateHeightType( height ) {
    return {
        type: UPDATE_HEIGHT,
        payload: height
    }
}

export function updateWeightType( weight ) {
    return {
        type: UPDATE_WEIGHT,
        payload: weight
    }
}

export function updateBMIType( bmi ) {
    return {
        type: UPDATE_BMI,
        payload: bmi
    }
}

export default reducer;