//React Imports

//React Router Imports
import { 
  Route,
   Routes,
    Outlet    
} from 'react-router-dom';

//Page Imports
import Home from './ui/pages/Home'

//Component Imports
import Nav from './ui/components/Nav';
import Footer from './ui/components/Footer';

function PageLayout() {
  return (
    <div className='bg-[#1b1229]'>
      <Nav />
      <Outlet/>
      <Footer />   
    </div>
  );
}

function App() {

  return (
    <>
        <Routes>   
            <Route
                path="/"
                element={<PageLayout />}
             >
              
                <Route index element={<Home />} />

             </Route>
        </Routes>
    </>
  )
}

export default App
