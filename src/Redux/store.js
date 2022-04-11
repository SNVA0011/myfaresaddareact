import { createStore } from "redux";
import rootReducer from "../Redux/reducer/RootReducer";

const store = createStore(rootReducer)

export default store