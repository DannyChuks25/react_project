import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import TodoList from './assets/Components/TodoList'
import Home from './assets/Components/Home'
import MainLayout from './assets/Components/MainLayout';
import Products from './assets/Components/Products';
import Shop from './assets/Components/Shop';


const App = () => {


  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path='/todoList' element={<TodoList />}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/shop' element={<Shop />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
