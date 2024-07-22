import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Router} from 'react-router-dom'

const  Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));


function App() {

  return (
    <div>
      
     <BrowserRouter>
     <Appber />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
        </Routes>    
     </BrowserRouter>
    </div>
  )
}

function Appber() {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button onClick={() => {
          navigate("/")
}
          
        }>Landing Page</button>
        <button onClick={() => {
          navigate("/dashboard")
}
        }>Dashboard Page</button>
      </div>
    </div>
  )
}


export default App;