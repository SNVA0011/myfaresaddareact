import { SENDVALUES } from "../Action";

const initialState = {
    PageTyeAndValue: []
}

const PageValuesAndtypesRedcuer = (state = initialState , action) => {

    switch (action.type) {
        case SENDVALUES :
            console.log("action.payload::", action.payload)
        return {
                ...state , PageTyeAndValue: [...state.PageTyeAndValue , action.payload]
            }
    }
    return state
}

export default PageValuesAndtypesRedcuer;