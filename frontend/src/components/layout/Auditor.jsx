import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Auditor = () => {

	const [showMenuAuditor, setShowMenuAuditor] = useState(false)

	return (
		<nav className=" px-2 sm:px-4 py-1.5 sm:py-2 fixed w-full z-40 top-0 left-0 background-nv z-50">
	        <div className="container flex flex-wrap justify-between items-center mx-auto div-nv">
	        <a href="./index.html" className="flex p-2 items-center">
	            <img src={Logo} className="mr-3 h-12 py-1 px-1" alt="Atletas Logo" />
	        </a>
	        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
	            <span className="sr-only">Menú</span>
	            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
	        </button>
	        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
	            <ul className=" flex flex-col p-4 mt-4 bg-[#141414] rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#141414] ">
		            <li>
		                <a href="#nosotros" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Sobre nosotros</a>
		            </li>
		            <li>
		                <a href="#galeria" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Galería</a>
		            </li>
		            <li>
		                <a href="#contacto" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 ">Contactos</a>
		            </li>
		            <li>
		                
		                
			            <a href="#" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 ">some</a>
			            
		                
		            </li>

		            <li>
		                
		                
			            <a href="#" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-transparent hover:text-blue-700 md:p-0 transition ease-in-out delay-150 ">Consultas</a>
			            
		                
		            </li>
		            <li>
		                <button type="button" onClick={e => setShowMenuAuditor(!showMenuAuditor)} className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
			                  <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="true">Configuracion</span>
			            </button>
			            	{/*<select id="dropdown-example" className={`${show ? `visible` : `hidden py-2 space-y-2`}`}>
							  <option value="EditarPerfil">Editar Perfil</option>
							  <option value="CambiarContrasenia">Cambiar Contrasenia</option>
							</select>*/}
			            	<ul id="dropdown-example" className={`${showMenuAuditor ? `visible` : `hidden py-2 space-y-2`}`}>
			                  
			                  <li>
		                           <a href="#" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
		                           text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Editar Perfil</a>
		                        </li>
		                        <li>
		                           <Link to="/changePassword" className="flex items-center p-2 pl-11 w-full text-xs font-MontserratExtraBold 
		                           text-menuAndButtonsTextBackground rounded-lg transition duration-75 group hover:bg-btnSecondaryAndHoverBackground text-white hover:bg-btnSecondaryAndHoverBackground">Cambiar Contrasenia</Link>
		                        </li>

		                        
			                       
			                </ul>
		            </li>
		            <li>
		                <a href="./src/register-login/iniciar-sesion.html" className=" block py-2 pr-8 pl-7 font-medium text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 transition ease-in-out delay-150" >Cerrar Sesion</a>
		            </li>
		           
	            </ul>
	        </div>
	        </div>
	    </nav>
	)
}

export default Auditor