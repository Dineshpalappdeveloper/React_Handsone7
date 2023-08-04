
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Cumponents/Header';
import Students from './Cumponents/Students';
import ContactUs from './Cumponents/ContactUs';
import Home from './Cumponents/Home';
import AddNewStudent from './Cumponents/AddNewStudent';

function App() {
  return (
   <>

<BrowserRouter>
<Header/>
<Routes>

  <Route path='/' element={<Home/>} />
  <Route path='*' element={<Home/>} />
  <Route path='/student' element={<Students/>} />
  <Route path='/student/add' element={<AddNewStudent/>} />
  <Route path='/contact' element={<ContactUs/>} />
</Routes>
</BrowserRouter>


   </>
  );
}

export default App;
