import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Loader from './components/Loader'
import Todo from './pages/Todo';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>  
            <Route path='/' element={<LandingPage/>} />
            <Route path='dashboard' element={
              <Suspense fallback={<Loader/>}>
                <Dashboard/>
              </Suspense>
              } />
              <Route path='/todo' element={<Todo/>} />      
      </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
