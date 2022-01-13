const nameReducer = (state = '', action) => {
    // console.log('action :::', action);

    switch (action.type) {
        // case "CHANGE_NAME":
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
        case "CHANGE_NAME":
            return action.payload;
        default:
            return state;
    }
}

export default nameReducer;