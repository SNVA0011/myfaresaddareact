import  {combineReducers } from "redux"
import PageValuesAndtypesRedcuer from "./SendingPageType&pageValue"



const rootReducer = combineReducers({
    PageTypeAndValue:PageValuesAndtypesRedcuer
})

export default rootReducer;