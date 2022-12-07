import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import SessionContext from "./context/SessionContext";
import getUserToken  from '@/helpers/getUserToken';

function App() {
  const [session, setSession] = useState(null)
  useEffect(() => {
    const token = getUserToken()
    token && setSession(token)
  },[])
  return (
    <SessionContext.Provider value={{session, setSession}}>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar brandName="ProHabits" routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </SessionContext.Provider>
  );
}

export default App;
