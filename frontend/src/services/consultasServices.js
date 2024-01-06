import clientAxios from './axios'

const representanteDeportivo = (valores) => {
	console.log(valores)
	return clientAxios.post('/representanteDeportivo',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const reporteAtletasPorDisciplinas = (valores) => {
	console.log(valores)
	return clientAxios.post('/reporteAtletasPorDisciplinas',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const reporteIndumentariaAtletas = (valores) => {
	console.log(valores)
	return clientAxios.post('/reporteIndumentariaAtletas',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const atletasConDatosPorConfirmarPorSuRepresentanteReportivo = () => {
	return clientAxios.get('').then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const estatusDeVigenciaPasaportesAtletas = (valores) => {
	console.log(valores)
	return clientAxios.post('/estatusDeVigenciaPasaportesAtletas',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const estatusDeVigenciaPasaportesAtletasDisciplina = (valores) => {
	console.log(valores)
	return clientAxios.post('/estatusDeVigenciaPasaportesAtletasDisciplina',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const requerimientoReporteAtletasRangoEdades = (valores) => {
	console.log(valores)
	return clientAxios.post('/requerimientoReporteAtletasRangoEdades',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const reporteAtletasVacunadosCovid19PorAtletas = (valores) => {
	console.log(valores)
	return clientAxios.post('/reporteAtletasVacunadosCovid19PorAtletas',valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}

const reporteAtletasVacunadosCovid19PorDisciplina = (valores) => {
	console.log(valores)
	return clientAxios.post('/reporteAtletasVacunadosCovid19PorDisciplina', valores).then((response) => {
		console.log(response)
		return response
	}).catch((err) => {
		console.log(err)
		return err
	})
}


const allRequest = {
	representanteDeportivo,
	reporteAtletasPorDisciplinas,
	reporteIndumentariaAtletas,
	atletasConDatosPorConfirmarPorSuRepresentanteReportivo,
	estatusDeVigenciaPasaportesAtletas,
	estatusDeVigenciaPasaportesAtletasDisciplina,
	requerimientoReporteAtletasRangoEdades,
	reporteAtletasVacunadosCovid19PorAtletas,
	reporteAtletasVacunadosCovid19PorDisciplina
}

export default allRequest