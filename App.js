import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/SignUp";
import Feeds from "./pages/Feeds";

import SelfProfile from "./pages/selfprofile/SelfProfile";

import Body from "./components/body/Body";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>

          <Route
            path="/feeds"
            element={
              <>
                <NavBar />
                <Body />
                <Feeds />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/self-profile"
            element={
              <>
                <NavBar />
                <SelfProfile />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
