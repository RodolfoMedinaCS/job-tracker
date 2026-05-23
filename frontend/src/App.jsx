import {Route, Routes} from "react-router-dom";
import ApplicationDetails from "./pages/ApplicationDetails/ApplicationDetails.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ContentWindow from "./layout/ContentWindow/ContentWindow.jsx";
import AddApplication from "./pages/AddApplication/AddApplication.jsx";

function App(){

  return(
      <>
          <Routes>
              <Route element={<ContentWindow />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/applications" element={<ApplicationsPage />} />
                  <Route path="/applications/:id" element={<ApplicationDetails/>} />
                  <Route path="/add-application" element={<AddApplication/>}></Route>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </>

  );
}

export default App
