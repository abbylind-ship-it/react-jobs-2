import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import HomePage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} >
      <Route index element={ <HomePage/> }/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App