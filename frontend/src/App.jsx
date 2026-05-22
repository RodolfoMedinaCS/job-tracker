import {Route, Routes} from "react-router-dom";
import ApplicationDetails from "./applicationDetails/applicationsDetails.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import ApplicationsPage from "./ApplicationsPage/ApplicationsPage.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import ContentWindow from "./ContentWindow/ContentWindow.jsx";

function App(){

  return(
      <>
          <Routes>
              <Route element={<ContentWindow />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/applications" element={<ApplicationsPage />} />
                  <Route path="/applications/:id" element={<ApplicationDetails />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
      </>

  );
}

export default App
