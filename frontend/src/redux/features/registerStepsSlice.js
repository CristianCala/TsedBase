import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	registerSteps: {
		step1: "",
		step2: "",
		step3: "",
	}
}

const registerStepsSlice = createSlice({
	name: "registerStepsSlice",
	initialState,
	reducers: {
		RegisterStep1: (state, action) => {
			state.registerSteps.step1 = action.payload
		},
		RegisterStep2: (state, action) => {
			state.registerSteps.step2 = action.payload
		},
		RegisterStep3: (state, action) => {
			state.registerSteps.step3 = action.payload
		},
		clearStateRegister: (state, action) => {
			state.registerSteps.step1 = ""
			state.registerSteps.step2 = ""
			state.registerSteps.step3 = ""
		}
	}
})

export const {RegisterStep1,RegisterStep2,RegisterStep3,clearStateRegister} = registerStepsSlice.actions
export default registerStepsSlice.reducer