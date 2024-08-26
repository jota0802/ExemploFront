import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//instalando as dependencias  
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'



//criando a funcao Browser Router
const router = createBrowserRouter([
  {
    //Chamando elemento pai 

    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Chamando elemento filho
    children:[
      {path:'/',element:<Home/>},
      {path: '/aluno',element:<Aluno/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
