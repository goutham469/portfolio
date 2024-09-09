
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

import Dev from './components/development/Dev';

import Console from './components/Console/Console';
import Docs from './components/docs/Docs';
import Notes from './components/Notes/Notes';
import Troubles from './components/Troubles/Troubles';
import CodeFormatter from './components/Formatter/CodeFormatter';


function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Portfolio/>
    },
    {
      path:'resume',
      element:<Resume/>
    },
    {
      path:'projects',
      element:<Projects/>
    },
    {
      path:'services',
      element:<Services/>
    },
    {
      path:'dev',
      element:<Dev/>,
      children:[
        {
          path:'',
          element:<Docs/>
        },
        {
          path:'console',
          element:<Console/>
        },
        {
          path:'notes',
          element:<Notes/>
        },
        {
          path:'troubles',
          element:<Troubles/>
        },
        {
          path:'formatter',
          element:<CodeFormatter/>
        }
      ]
    }
  ])
  return (
    <div className="App"> 
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
