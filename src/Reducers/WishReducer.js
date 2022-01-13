const wishReducer = (state = [], action) => {
    // console.log('action :::', action);

    switch (action.type) {
        // case "ADD_WISH":
        //     return {
        //         ...state,
        //         name: action.payload
        //     };
        case "ADD_WISH":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default wishReducer;