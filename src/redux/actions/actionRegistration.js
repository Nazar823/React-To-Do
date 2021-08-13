import {ERR_REG, REGISTRATION} from "./actionsType";

export const registrationStarted = (bool) => ({
    types: REGISTRATION,
    payload: {
        bool
    }
})
export const errReg = error => ({
    type: ERR_REG,
    payload: {
        error
    }
})
