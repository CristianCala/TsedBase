import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, Navigate, useLocation} from 'react-router-dom'

function RequireLogin({ children }) {
  const isLoggedIn = useSelector(state => state.user.role)
  console.log('isLoggedIn')
  console.log(isLoggedIn)
  let location = useLocation();
  //if (isLoggedIn === null) return <Navigate to="/login" replace />
  switch (isLoggedIn) {
  	case 1: {
  		// SUPER_ADMIN
  		return children
  		break
  	}
  	case 2: {
  		//ADMINISTRATOR
  		return children
  		break
  	}
  	case 3: {
  		//SUPERVISOR
  		return children
  		break
  	}
  	case 4: {
  		// COLLABORATOR
  		return children
  		break
  	}
  	case 5: {
  		//ATHLETE
  		return children
  		break

  	}
  	case 6: {
  		//AUDITOR
  		return children
  		break
  	}
  	default: return <Navigate to="/login" replace />
  }
  //else if ( (isLoggedIn != null) && (isLoggedIn === 0) ) return children
  //else if ( (isLoggedIn != null) && (isLoggedIn.userIdentity === "admin") ) return children
  
}

export default RequireLogin