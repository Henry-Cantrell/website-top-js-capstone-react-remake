export const uidCaptureReducer = (state = 'empty', action) => {
    switch(action.type) {
        case 'LOGGED_IN':
            return state = action.uid;
        default: 
            return state=state
    }
}