import React from "react";
import { Helmet } from "react-helmet";  // Importando o React Helmet
import Button from "./components/Button/Button";

const App = () => {
  const handleClick = (message) => {
    alert(message);  
  };

  return (
    <div style={{ padding: "20px" }}>
      <Helmet>
        <title>Botones</title>
      </Helmet>

      <h1>TESTANDO BOTONES</h1>

      <Button 
        text="Primário" 
        styleType="primary" 
        onClick={() => handleClick("Botão 01 clicado!")} 
      />
      <Button 
        text="Secundário" 
        styleType="secondary" 
        onClick={() => handleClick("Botão 02 clicado!")} 
      />
      <Button 
        text="Perigo" 
        styleType="danger" 
        onClick={() => handleClick("Botão Perigo clicado!")} 
      />
      <Button 
        text="Desabilitado" 
        styleType="danger" 
        disabled={true} 
      />
    </div>
  );
};

export default App;
