import Home from './routes/home/home.component';
import {Route, Routes} from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signin/signin.component';

const Shop = () => {
  return (
    <div>
      <div>
      <h1>Shop Page</h1>
      </div>
    </div>
  )
}

const App = () => {

  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Route>  
    </Routes>
  ) 

}

export default App;
