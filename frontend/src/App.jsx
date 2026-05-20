import Dashboard from "./dashboard/dashboard.jsx";
import {Route, Routes} from "react-router-dom";
import AddApplication from "./addApplication/addApplication.jsx";
import ApplicationDetails from "./applicationDetails/applicationsDetails.jsx";
import Account from "./account/account.jsx";
import Login from "./logIn/login.jsx";
import Register from "./register/register.jsx";

function App(){

  return(
      <>
          <Routes>
              <Route path={"/dashboard"} element={<Dashboard/>}></Route>
              <Route path={"/add-application"} element={<AddApplication/>}></Route>
              <Route path={"applications/:id"} element={<ApplicationDetails/>}></Route>
              <Route path={"/account"} element={<Account/>}></Route>
              <Route path={"/login"} element={<Login/>}></Route>
              <Route path={"/register"} element={<Register/>}></Route>

          </Routes>
      </>

  );
}

export default App
