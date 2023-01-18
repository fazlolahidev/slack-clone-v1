import React, { useState } from "react";

//* Pages *//
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

//* Router *//
import { Routes, Route, Navigate } from "react-router-dom";

//* Firebase Hooks *// 
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase";


const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return 

  return (
    <div className="h-[100vh] overflow-hidden">
      {user ? (
        <Routes>
          <Route path="/" element={<Navigate to="/channels" replace />} />
          <Route path="/channels" element={<Home />} />
          <Route path="/channels/:channelId" element={<Chat />} />
          <Route path='*' element={<Navigate to='/channels' />} replace />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
