const headerWordsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CHANGE_TEXT":
            return payload.words

        default:
            return state;
    }
}

export default audioVolumeReducer;