import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { userInputs } from "./formSource.js";
import { productInputs } from "./formSource.js";
import "./Style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext.jsx";
// import { chartDataReducer } from "recharts/types/state/chartDataSlice.js";
import { AuthContext } from "./Context/AuthContext.jsx";
import { userColumns, hotelColumns, roomColumns } from "./Datasource.jsx";
import NewHotel from "./Pages/NewHotel/NewHotel";
import NewRoom from "./Pages/NewRoom/NewRoom";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <PrivateRoutes>
                  <Home />
                </PrivateRoutes>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <PrivateRoutes>
                    <List columns={userColumns} />
                  </PrivateRoutes>
                }
              />
              <Route
                path=":userId"
                element={
                  <PrivateRoutes>
                    <Single />
                  </PrivateRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <PrivateRoutes>
                    <New inputs={userInputs} title="Add New User" />
                  </PrivateRoutes>
                }
              />
            </Route>

            <Route path="hotels">
              <Route index element={
                <PrivateRoutes>
                <List columns={hotelColumns}/>
                </PrivateRoutes>
                } />
              <Route
                path=":productId"
                element={
                  <PrivateRoutes>
                    <Single />
                  </PrivateRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <PrivateRoutes>
                    <NewHotel />
                  </PrivateRoutes>
                }
              />
            </Route>
            
<Route path="rooms">
              <Route index element={
                <PrivateRoutes>
                <List columns={roomColumns}/>
                </PrivateRoutes>
                } />
              <Route
                path=":productId"
                element={
                  <PrivateRoutes>
                    <Single />
                  </PrivateRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <PrivateRoutes>
                    <NewRoom />
                  </PrivateRoutes>
                }
              />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
