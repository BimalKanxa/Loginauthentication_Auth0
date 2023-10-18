
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="sharma03.us.auth0.com"
    clientId="WkguDyom8KI4I186uUPbsh2bblC13v2W"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>

)
