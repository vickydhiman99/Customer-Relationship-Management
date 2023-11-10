import { createStore , combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import login from './auth/reducer';
import snackbar from './common/snackbar/reducer';
import loader from './common/loader/reducer';
import allotment from "./pages/allotment/reducer";
import product from "./pages/product/reducer";
import employee from "./pages/employee/reducer";
import leads from "./pages/leads/reducer";
import profile from "./pages/profile/reducer";
import setting from "./pages/settings/reducer";
import lead from "./pages/leads/reducer"

const persistConfig = {
  key: 'root',
  storage,
}


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
  snackbar,
  loader,
  login,
  lead,
  
  product,
  employee, 
  allotment,
  leads,
  profile,
  setting



});

const persistedReducer = persistReducer(persistConfig, reducer)
const configureStore = (initialState) => createStoreWithMiddleware(persistedReducer, initialState);
const store = configureStore();
let persistor = persistStore(store)
export default {store,persistor}

