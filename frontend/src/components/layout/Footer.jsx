import React from 'react'

const Footer = () => {
	return (

		<footer className="block w-full h-12 mb-0  justify-center items-center">
	        <div className="h-12 justify-between text-center flex  items-center cont-footer">
	            <a className="sm:ml-4 ml-2 transition ease-in-out delay-150 uppercase md:text-sm text-[10px] font-semibold hover:text-white">noticias de última hora</a>
	            <p className="sm:ml-4 text-[8px] sm:text-xs text-[#292929] font-semibold">Copyright © 2022. Reservados todos los derechos</p>
	            <div className="mr-4 w-1/4 flex justify-between">
	                <a href="./src/aviso-legal.html" className="text-[8px] sm:text-xs transition font-semibold ease-in-out delay-150 hover:text-amber-400 text-[#292929] "> Aviso Legal  </a>
	                <a href="./src/proteccion-datos.html" className="text-[8px] sm:text-xs transition font-semibold ease-in-out delay-150 hover:text-amber-400 text-[#292929] transition ease-in-out delay-150"> Protección de datos  </a>
	                <a href="#contacto" className="text-[8px] sm:text-xs transition font-semibold ease-in-out delay-150 hover:text-amber-400 text-[#292929] transition ease-in-out delay-150 lg:block hidden"> Contacto</a>
	            </div>
	        </div>    
	    </footer>

	)
}

export default Footer