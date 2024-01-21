import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Posts = lazy(() => import("./views/Posts"))
const Publiclayout = lazy(() => import("./layout/PublicLayout"))
  
function App() {
   return( 
   <Suspense fallback={<div>Loadings</div>}>
       <Routes>
        <Route  element={<Publiclayout />}>
           <Route path="/" element={<Home/>} />
           <Route path="/posts" element={<Posts/>} />
        </Route>
       </Routes>
   </Suspense> 
   )
}

export default App
