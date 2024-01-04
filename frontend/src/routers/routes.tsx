import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../page/home.tsx";
import Login from "../page/login.tsx";
import Redirect from "../page/redirect.tsx";
import RedirectSecurity from "../security/SecurityRedirect.tsx";

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RedirectSecurity />} >
          <Route path="/redirect" element={<Redirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
