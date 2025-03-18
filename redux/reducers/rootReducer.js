
import { combineReducers } from "redux";

import headerReducer from "./header/rootReducer";
import scrollToViewReducer from "./scrollToViewReducer";

const app = combineReducers({
    header: headerReducer,
    scrollToView: scrollToViewReducer
});

export default app;