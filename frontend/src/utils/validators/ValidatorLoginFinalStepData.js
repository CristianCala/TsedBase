import React, {useState, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {userCompleteHimData} from '../../redux/features/userSlice'
import Spinner from '../../components/loadingComponents/Spinner'

const ValidatorLoginFinalStepData = () => {

	const [enviar, setEnviar] = useState(true)
	const [message, setMessage] = useState("")
	const dispatch = useDispatch()
	const data = useSelector(state => state)

	console.log(data)

	const handleValidator = () => {
		const {
			birthday,
			age,
			gener,
			placebourn,
			state,
			city,
			municipality,
			parish
		} = data.completeDatalogin.completeDataSteps.step1

		const {id,file_upload_id} = data.completeDatalogin.completeDataSteps.step2

		const {
			numberPassport,
			dateEmition,
			dateExpire,
			file_upload_passaport
		} = data.completeDatalogin.completeDataSteps.step3

		const {
			estatura,
			peso,
			tallaFranela,
			tallaChaqueta,
			tallaPantalon,
			tallaChaqueta1
		} = data.completeDatalogin.completeDataSteps.step4

		const {first,second,third,fourth,file_upload_vaccine} = data.completeDatalogin.completeDataSteps.step5

		const {
			actividad,
			displina,
			categoria,
			nivel,
			otraActividad,
			file_upload_info
		} = data.completeDatalogin.completeDataSteps.step6

	    const valores = {
	    	birthday,
			age,
			gener,
			placebourn,
			state,
			city,
			municipality,
			parish,
			id,
			file_upload_id,
			numberPassport,
			dateEmition,
			dateExpire,
			file_upload_passaport,
			estatura,
			peso,
			tallaFranela,
			tallaChaqueta,
			tallaPantalon,
			tallaChaqueta1,
			first,second,
			third,
			fourth,
			file_upload_vaccine,
			actividad,
			displina,
			categoria,
			nivel,
			otraActividad,
			file_upload_info
	    }
		

		dispatch(userCompleteHimData(valores))
		setTimeout(() => {
			if (data.user.status !== 200 || data.user.status !== 201) {
				setMessage("Error")

			}
			setEnviar(false)
		},2000)
	}


	useEffect(() => {
		handleValidator()
	},[])
	
	

	return (
		<Fragment>
			{enviar ? (<Spinner />) : null}
			{message ? (
				<Fragment>
					<p className="text-red-600 text-sm">{message}</p>
					<div className="flex sm:w-1/3 w-1/2 justify-center py-2">
	                  <Link
	                    to="/completeData"
	                    className="text-white w-full bg-gradient-to-bl from-[#9662F1] to-[#673AB7] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm py-2 text-center mb-2">
	                      Registrar De Nuevo Los Datos
	                  </Link>
	              	</div>
             	</Fragment>
			): null}
		</Fragment>
	)
}

export default ValidatorLoginFinalStepData
