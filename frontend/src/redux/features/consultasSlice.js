import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import allRequest from '../../services/consultasServices'

export const representanteDeportivo = createAsyncThunk(
	'consultas/representanteDeportivo',
	async (valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.representanteDeportivo(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}
)

export const reporteAtletasPorDisciplinas = createAsyncThunk(
	'consultas/ReporteAtletasPorDisciplinas',
	async(valores, {rejectWithValue}) => {
		try {

			console.log(valores)
			const res = await allRequest.reporteAtletasPorDisciplinas(valores)
			return res

		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}
)

export const reporteIndumentariaAtletas = createAsyncThunk(

	"consultas/reporteIndumentariaAtletas",
	async(valores, {rejectWithValue}) => {
		try {

			console.log(valores)
			const res = await allRequest.reporteIndumentariaAtletas(valores)
			return res
		}catch(err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)

export const atletasConDatosPorConfirmarPorSuRepresentanteReportivo = createAsyncThunk(

	"consultas/AtletasConDatosPorConfirmarPorSuRepresentanteReportivo",
	async({rejectWithValue}) => {
		try {
			console.log()
		
		}catch(err) {
			console.log(err)
		}
	}

)

export const estatusDeVigenciaPasaportesAtletas = createAsyncThunk(
	"consultas/EstatusDeVigenciaPasaportesAtletas",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.estatusDeVigenciaPasaportesAtletas(valores)
			return res
		}catch(err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)

export const estatusDeVigenciaPasaportesAtletasDisciplina = createAsyncThunk(
	"consultas/estatusDeVigenciaPasaportesAtletasDisciplina",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.estatusDeVigenciaPasaportesAtletasDisciplina(valores)
			return res
		}catch(err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)

export const requerimientoReporteAtletasRangoEdades = createAsyncThunk(

	"consultas/requerimientoReporteAtletasRangoEdades",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.requerimientoReporteAtletasRangoEdades(valores)
			return res
		}catch (err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)

export const reporteAtletasVacunadosCovid19PorAtletas = createAsyncThunk(

	"consultas/reporteAtletasVacunadosCovid19PorAtletas",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.reporteAtletasVacunadosCovid19PorAtletas(valores)
			return res
		
		}catch(err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)

export const reporteAtletasVacunadosCovid19PorDisciplina = createAsyncThunk(

	"consultas/reporteAtletasVacunadosCovid19PorDisciplina",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
			const res = await allRequest.reporteAtletasVacunadosCovid19PorDisciplina(valores)
			return res
		
		}catch(err) {
			console.log(err)
			if (!err.response) {
		        throw err
		    }

		    return rejectWithValue(err.response.data)
		}
	}

)


export const seccionDeNotificaciones = createAsyncThunk(
	"consultas/seccionDeNotificaciones",
	async(valores, {rejectWithValue}) => {
		try {
			console.log(valores)
		}catch(err) {
			console.log(err)
		}
	}
)


const initialState = {
	loading: false,
	error: false,
	status: "",
}


const consultasSlice = createSlice({
	name: 'consultas',
	initialState,
	reducers: {},
	extraReducers: {
		[representanteDeportivo.pending]: (state, action) => {
			state.loading = true
		},
		[representanteDeportivo.fulfilled]: (state, action) => {
			state.loading = false
		},
		[representanteDeportivo.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		//reporteAtletasPorDisciplinas
		[reporteAtletasPorDisciplinas.pending]: (state, action) => {
			state.loading = true
		},
		[reporteAtletasPorDisciplinas.fulfilled]: (state, action) => {
			state.loading = false
		},
		[reporteAtletasPorDisciplinas.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		//reporteIndumentariaAtletas
		[reporteIndumentariaAtletas.pending]: (state, action) => {
			state.loading = true
		},
		[reporteIndumentariaAtletas.fulfilled]: (state, action) => {
			state.loading = false
		},
		[reporteIndumentariaAtletas.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		//atletasConDatosPorConfirmarPorSuRepresentanteReportivo
		[atletasConDatosPorConfirmarPorSuRepresentanteReportivo.pending]: (state, action) => {
			state.loading = true
		},
		[atletasConDatosPorConfirmarPorSuRepresentanteReportivo.fulfilled]: (state, action) => {
			state.loading = false
		},
		[atletasConDatosPorConfirmarPorSuRepresentanteReportivo.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		//estatusDeVigenciaPasaportesAtletas
		[estatusDeVigenciaPasaportesAtletas.pending]: (state, action) => {
			state.loading = true
		},
		[estatusDeVigenciaPasaportesAtletas.fulfilled]: (state, action) => {
			state.loading = false
		},
		[estatusDeVigenciaPasaportesAtletas.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		// estatusDeVigenciaPasaportesAtletasDisciplina
		[estatusDeVigenciaPasaportesAtletasDisciplina.pending]: (state, action) => {
			state.loading = true
		},
		[estatusDeVigenciaPasaportesAtletasDisciplina.fulfilled]: (state, action) => {
			state.loading = false
		},
		[estatusDeVigenciaPasaportesAtletasDisciplina.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		//requerimientoReporteAtletasRangoEdades
		[requerimientoReporteAtletasRangoEdades.pending]: (state, action) => {
			state.loading = true
		},
		[requerimientoReporteAtletasRangoEdades.fulfilled]: (state, action) => {
			state.loading = false
		},
		[requerimientoReporteAtletasRangoEdades.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		// reporteAtletasVacunadosCovid19
		[reporteAtletasVacunadosCovid19PorAtletas.pending]: (state, action) => {
			state.loading = true
		},
		[reporteAtletasVacunadosCovid19PorAtletas.fulfilled]: (state, action) => {
			state.loading = false
		},
		[reporteAtletasVacunadosCovid19PorAtletas.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	}
})

export default consultasSlice.reducer