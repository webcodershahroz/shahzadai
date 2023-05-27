import './App.css';
import Choice from './components/Choice';
import Chat from './components/Chat'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
  <Router>

      <Routes>
          <Route path="/"  element={<Choice />}></Route>
          <Route path="/chatai" element={<Chat/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
