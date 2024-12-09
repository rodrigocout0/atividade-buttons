import React from "react";
import "./Button.css";  // Importa o CSS para  estilos do botão

const Button = ({ 
  text,  // Texto  no botão
  onClick,  // Função de clicar
  styleType = "primary",  // Tipo de estilo do botão 
  disabled = false  // Define se o botão é desabilitado
}) => {
  return (
    <button 
      className={`button ${styleType}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
