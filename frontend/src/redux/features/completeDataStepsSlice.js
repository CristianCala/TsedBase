import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	completeDataSteps: {
		step1: "",
		step2: false,
		step3: false,
		step4: false,
		step5: false,
		step6: false,
	}
}

const completeDataStepsSlice = createSlice({
	name: "registerStepsSlice",
	initialState,
	reducers: {
		completeDataStep1: (state, action) => {
			state.completeDataSteps.step1 = action.payload
		},
		completeDataStep2: (state, action) => {
			state.completeDataSteps.step2 = action.payload
		},
		completeDataStep3: (state, action) => {
			state.completeDataSteps.step3 = action.payload
		},
		completeDataStep4: (state, action) => {
			state.completeDataSteps.step4 = action.payload
		},
		completeDataStep5: (state, action) => {
			state.completeDataSteps.step5 = action.payload
		},
		completeDataStep6: (state, action) => {
			state.completeDataSteps.step6 = action.payload
		},
	}
})

export const {
	completeDataStep1,
	completeDataStep2,
	completeDataStep3,
	completeDataStep4,
	completeDataStep5,
	completeDataStep6
} = completeDataStepsSlice.actions
export default completeDataStepsSlice.reducer