import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {representanteDeportivo} from '../redux/features/consultasSlice'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Spinner from '../components/loadingComponents/Spinner'

const RepresentanteDeportivo = () => {

	const dispatch = useDispatch()
	const consulta = useSelector(state => state)
	const [message, setMessage] = useState('')
	const [enviar, setEnviar] = useState(false)
	console.log(consulta)
	const initialValues = {
		categoria: '',
		cedulaRepresentante: '',
		actividadDeportiva: '',
		disciplina: '',
		cedulaDelAtletaARepresentar: ''
	}

	const validationShema = Yup.object().shape({
		categoria: Yup.string().required('debe rellenar este campo'),
		cedulaRepresentante: Yup.string().required('debe rellenar este campo'),
		actividadDeportiva: Yup.string().required('debe rellenar este campo'),
		disciplina: Yup.string().required('debe rellenar este campo'),
		cedulaDelAtletaARepresentar: Yup.string().required('debe rellenar este campo')
	})

	const handleSubmit = (valores) => {
		console.log(valores)
		setEnviar(true)
		dispatch(representanteDeportivo(valores))
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
		    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Asignacion de Atletas a Representante</h2>

		    <Formik
		    	initialValues={initialValues}
		    	validationShema={validationShema}
		    	onSubmit={handleSubmit}
		    >

			    <Form>
			        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="Usuario">Categoria de Usuario</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="categoria" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring"
			                	required 
			                />
			            </div>

			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="Cedula">Cedula de Identidad del representante Deportivo</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="cedulaRepresentante" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring"
			                	required 
			                />
			            </div>

			            <div>
			            	<ErrorMessage
                              name="categoria"
                              component="div"
                              className="text-red-600 text-sm"
                            />
                        </div>

                        <div>
			            	<ErrorMessage
                              name="cedulaRepresentante"
                              component="div"
                              className="text-red-600 text-sm"
                            />
                        </div>

			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="actividad">Tipo de actividad deportiva</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="actividadDeportiva" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring" 
			                />
			            </div>

			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="disciplina">Tipo de Disciplina</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="disciplina" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring" 
			                />
			            </div>

			            <div>
			                <label className="text-gray-700 dark:text-gray-200" htmlFor="cedulaDelAtletaARepresentar">Numero de Cedula del Atleta si es mayor de edad o certificado de nacimiento en caso de ser menor de edad</label>
			                <Field 
			                	id="" 
			                	type="text"
			                	name="cedulaDelAtletaARepresentar" 
			                	className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
			                	rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 
			                	focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none 
			                	focus:ring" 
			                />
			            </div>

			          
			        </div>

			        <div className="flex justify-between mt-6">
			            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">Registrar</button>
			            <button className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">Cancelar</button>
			            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300">Actualizar</button>
			        </div>
			    </Form>
			</Formik>
		</section>

	)
}

export default RepresentanteDeportivo