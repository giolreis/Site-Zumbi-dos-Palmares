import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Sair() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="texto-formatacao">
      <h1>Deseja fazer Logout?</h1>
      <button className="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Sair;
