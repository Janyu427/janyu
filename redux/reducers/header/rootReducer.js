
import { combineReducers } from "redux";

import mobileMenuReducer from "./mobileMenuReducer";

const app = combineReducers({
    mobileMenu: mobileMenuReducer
});

export default app;