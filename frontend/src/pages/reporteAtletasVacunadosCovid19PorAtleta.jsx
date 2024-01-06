import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {reporteAtletasVacunadosCovid19PorAtletas} from '../redux/features/consultasSlice'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Spinner from '../components/loadingComponents/Spinner'

const ReporteAtletasVacunadosCovid19PorAtleta = () => {

	const [enviar, setEnviar] = useState(false)
	const [message, setMessage] = useState('')
	const dispatch = useDispatch()
	const consulta = useSelector(state => state)
	console.log(consulta)

	const initialValues = {
		identification: ''
	}

	const validationSchema = Yup.object().shape({
		identification: Yup.string().required('debe agregar identificacion'),
	})

	const handleSubmit = (valores) => {
		console.log(valores)
		setEnviar(true)
		dispatch(reporteAtletasVacunadosCovid19PorAtletas(valores))
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
		    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Reporte Atletas Vacunados Covid 19 por atletas</h2>

		    <Formik
		    	initialValues={initialValues}
		    	validationSchema={validationSchema}
		    	onSubmit={handleSubmit}
		    >
			    <Form>
			        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="indentificacion"></label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="identification" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring"
			                	required 
			                />
			            </div>

			            {/*<div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Disciplina</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="disciplina" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring"
			                	required 
			                />
			            </div>*/}

			            <div>
			            	<ErrorMessage
                              name="identification"
                              component="div"
                              className="text-red-600 text-sm"
                            />
                        </div>

                        {/*<div>
			            	<ErrorMessage
                              name="disciplina"
                              component="div"
                              className="text-red-600 text-sm"
                            />
                        </div>*/}

			            
			          
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

export default ReporteAtletasVacunadosCovid19PorAtleta