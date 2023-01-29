export function reducer(state, action) {

    const {type, payload} =action;

    switch(type){
        case "signupData": return {...state, payload};

        case "lignData": return {...state, payload};

        default: return state;
    }

}