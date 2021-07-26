
const initialState = 20

const setZero = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ZERO": return 0;
        default: return state;
    }
}

export default setZero;
