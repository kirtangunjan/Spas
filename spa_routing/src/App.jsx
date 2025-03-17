import { useState } from 'react'
import { BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/neet/online_coaching_11' element={<Class11program></Class11program>}></Route>
            <Route path='/neet/online_coaching_12' element={<Class12program></Class12program>}></Route>
            <Route path='/' element={<Landing></Landing>}></Route>
            <Route path='*' element={<Errorpage></Errorpage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


function Layout(){
  return(
    <>
     <div className='h-full'>
      <Header></Header>    
    </div>
    <div className='h-[90vh] bg-zinc-400'>
      <Outlet></Outlet>
    </div>
    <div>
      FOOTER | CONTACT US
    </div>
    </>
   
  )
}


function Header(){
  return (
    <>
     <Link to="/">Home</Link>
        |
        <Link to="/neet/online_coaching_11">Class 11</Link>
        |
        <Link to="/neet/online_coaching_12">Class 12</Link>
    </>
  )
}

function Landing(){
  return (
    <div>
      welcome to allen
    </div>
  )
}


function Class11program(){
  return (
    <div>
      class 11 program
    </div>
  )
}

function Class12program(){
  const navigate=useNavigate()

  function redirectuser(){
    navigate("/")
  }
  return (
    <div>
      class 12 program
      <button onClick={redirectuser}>Go back to landing page</button>
    </div>
  )
}

function Errorpage(){
  return(
    <div>
       Sorry Page not found
    </div>
  )
}

export default App
