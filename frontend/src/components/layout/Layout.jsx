import React, {Fragment} from 'react'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children}) => {
	return (
		<Fragment>
		

		<Header />
			{children}
		<Footer /> 

	</Fragment>                                                                 
	)
}

export default Layout

/*
<div x-data="{ open: false }" id="simple-cookie-consent" x-init="() => setTimeout(() => open = true, 500)" class="h-screen absolute z-50 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	        <div  x-show="open"     
	            x-transition:enter-start="opacity-0 scale-90" 
	            x-transition:enter="transition duration-200 transform ease"
	            x-transition:leave="transition duration-200 transform ease"
	            x-transition:leave-end="opacity-0 scale-90"
	            className="flex-col max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
	        <div className="w-full font-semibold text-gray-800">Esta web utiliza cookies propias para facilitar la navegación y cookies de terceros para obtener estadísticas de uso y satisfacción.</div>
	        <div className="w-full font-semibold text-xs text-gray-600 sm:flex justify-between">
	            <div>Puedes obtener más información en el apartado de "Cookies" de nuestro <a href="./src/aviso-legal.html" className="text-blue-600 whitespace-nowrap hover:underline">aviso legal</a></div> 
	            <div className="flex gap-4 items-center flex-shrink-0 items-center justify-center md:justify-between">
	            	<button @click="open = false" onClick="deleteID()" className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Aceptar</button>
	            	<button @click="open = false" onClick="deleteID()" className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Declinar</button>
	        	</div>
	        </div>
        
    		</div>
			<Header />
				{children}
			<Footer />
		</div>


*/