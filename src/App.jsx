import Navbar from './components/Navbar'
import Leftsec from './components/Leftsec'
import Midsec from './components/Midsec'
import safe from '../src/assets/safe.png'
import Card from './components/Card'
import NetBanking from './components/NetBanking'
import './App.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PriceDet from './components/PriceDet'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Leftsec/><Midsec/></>
    },
    {
      path: "/Card",
      element: <><Leftsec/><Card/></>
    },
    {
      path: "/NetBanking",
      element:<><Leftsec/><NetBanking/></>
    }
  ])

  return (
    <>
    <Navbar/>
    <h1 className='heading'>Select Payent Method</h1>

<div className="body">
    <div className="sec">  
    <RouterProvider router={router}/>
    
    </div>
    
    <div className="sec-2">
    <PriceDet/>
    </div>
  </div>
    </>
  )
}

export default App
