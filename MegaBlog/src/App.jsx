import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import "./App.css";
console.log("This is authService",authService)
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(authService)
  //   authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // }, []);
  useEffect(() => {
    console.log("authService:", authService); // Check if authService is imported correctly
    console.log("authService.getCurrentUser:", authService.getCurrentUser); // Check if getCurrentUser exists
  
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          TODO
        {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App;
