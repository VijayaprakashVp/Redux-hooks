import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { TodosCreate } from "./Components/TodosCreate";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
  // Children => here, components is the children, If the "user" not logged in navigate the user to "Login Page"
};

function App() {
  const isAuthenticated = false; // This needs to get from the redux

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/todos-create"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <TodosCreate />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
