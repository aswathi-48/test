import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Dashboard from './Components/Dashboard';

function App() {

  const homeData = useSelector((state) => state.usersData.userDatas[0])

  if(homeData)
{
  var Token = homeData && homeData.accesstoken
  console.log('tokenn',Token);
}


  const router =createBrowserRouter([
    {
      path:"/",
      element:Token ? <Dashboard/> : <Login/>
    },
    {
      path:'/registerr',
      element:<Register/>
    }
  ])
  return (
    <div className="App">
           <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
