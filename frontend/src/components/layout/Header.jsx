import React from 'react'
import {useSelector} from 'react-redux'
import AdminAndSupervisorOpcions from './AdminAndSupervisorOpcions'
import UsuarioAtletaYColaborador from './UsuarioAtletaYColaborador'
import Auditor from './Auditor'
import NotLogin from './NotLogin'

const Header = () => {

    const role = useSelector(state => state.user.role)
    console.log(role)

    // me faltan consumir una api de noticias

    switch(role) {
        case 1: {
            // SUPER_ADMIN
            return (
                <NotLogin />
            )
            break
        }
        case 2: {
            //ADMINISTRATOR
            return (
                <NotLogin />
            )
            break
        }
        case 3: {
            //SUPERVISOR
            return (
                <NotLogin />
            )
            break
        }
        case 4: {
            return (
                <NotLogin />
            )
            break
        }
        case 5: {
            //ATHLETE
            return (
                <NotLogin />
            )
            break

        }
        case 6: {
            //AUDITOR
            return (
                <NotLogin />
            )
            break
        }
        default: {
            return (
                <NotLogin />
            )
            break
        } 
    }

}

export default Header
