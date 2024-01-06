import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {requerimientoReporteAtletasRangoEdades} from '../redux/features/consultasSlice'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Spinner from '../components/loadingComponents/Spinner'

const RequerimientoReporteAtletasRangoEdades = () => {

	const dispatch = useDispatch()
	const consulta = useSelector(state => state)
	const [message, setMessage] = useState('')
	const [enviar, setEnviar] = useState(false)
	console.log(consulta)
	const initialValues = {
		rangoDeEdades: '',
		registros: '',
		orden: ''
	}

	const validationSchema = Yup.object().shape({
		rangoDeEdades: Yup.string().required('debe agregar actividad'),
	})

	const handleSubmit = (valores) => {
		console.log(valores)
		setEnviar(true)
		dispatch(requerimientoReporteAtletasRangoEdades(valores))
		setTimeout(() => {
        if (consulta.status === 200 || consulta.status === 201) {
        	setEnviar(false)
			setMessage(false)
      
        }else {
        	setEnviar(false)
          //const {Message} = user
			setMessage("Error")
          //setMessage(Message)
          //console.log(Message)
        }
      },2000)
	}


	return (

		<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
		    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Reporte de Atletas Por Rango de Edades</h2>

		    <Formik
		    	initialValues={initialValues}
		    	validationSchema={validationSchema}
		    	onSubmit={handleSubmit}
		    >
			    <Form>
			        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Rango de Edades</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="rangoDeEdades" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring"
			                	required 
			                />
			            </div>

			            

			            <div>
			            	<ErrorMessage
                              name="rangoDeEdades"
                              component="div"
                              className="text-red-600 text-sm"
                            />
                        </div>


			            <div>
			            	<label htmlFor="registros" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
							<Field
								as="select" 
								id=""
								name="registros" 
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
								focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
								dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
								dark:focus:border-blue-500"
							>
							  <option selected defaultValue="10">Selecionar la cantidad de registros</option>
							  <option value="10">Lista de 10 registros</option>
							  <option value="20">Lista de 20 registros</option>
							  <option value="30">Lista de 30 registros</option>
							  <option value="50">Lista de 50 registros</option>
							  <option value="100">Lista de 100 registros</option>
							</Field>
			                
			            </div>

						<div>
			            	<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
							<Field 
								as="select" 
								id=""
								name="orden"  
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
								focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
								dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
								dark:focus:border-blue-500"
							>
							  <option selected defaultValue="Predeterminado">Selecionar como desea ordenar los registros</option>
							  <option value="Predeterminado">Predeterminado</option>
							  <option value="Ascendente">Ascendente</option>
							  <option value="Descendente">Descendente</option>
							  <option value="DisciplinaAscendente">Disciplina Ascendente</option>
							  <option value="DisciplinaDescendente">Disciplina Descendente</option>
							  <option value="Cédula">Cédula</option>
							  <option value="CédulaAscendente">Cédula Ascendente</option>
							  <option value="CédulaDescendente">Cédula Descendente</option>
							  <option value="certificadoDeNacimiento">certificado de nacimiento</option>
							  <option value="certificadoDeNacimientoAscendente">certificado de nacimiento Ascendente</option>
							  <option value="certificadoDeNacimientoDescendente">certificado de nacimiento Descendente</option>
							</Field>
			                
			            </div>

			          
			        </div>

			        <div className="flex justify-between mt-6">
			            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">Consultar</button>
			            <Link to="/" className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">Cancelar</Link>
			        </div>
			    </Form>
			</Formik>
		</section>
	)

}

export default RequerimientoReporteAtletasRangoEdades