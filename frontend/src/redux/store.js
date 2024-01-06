import {configureStore} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import userSlice from './features/userSlice'
import completeDataStepsSlice from './features/completeDataStepsSlice'
import registerStepsSlice from './features/registerStepsSlice'
import consultasSlice from './features/consultasSlice'

const reducers = combineReducers({
 	user: userSlice,
 	registerUser: registerStepsSlice,
 	completeDatalogin: completeDataStepsSlice,
 	consuntas: consultasSlice,         
})

const persistConfig = {
    key: 'root',
  	storage	
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

/*export const store = configureStore({
	reducer: {
		user: userSlice,
	}
})*/

