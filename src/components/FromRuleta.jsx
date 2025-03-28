import React, { useState } from "react";
import "../style/ruleta.css"

const premios = [
  "Batería",
  "Filtro de aceite",
  "Pastillas de freno",
  "Radiador",
  "Alternador",
  "Bomba de gasolina",
  "Amortiguador",
  "Neumático"
];

const Ruleta = () => {
  const [girando, setGirando] = useState(false);
  const [angulo, setAngulo] = useState(0);
  const [premio, setPremio] = useState(null);

  const girarRuleta = () => {
    if (girando) return;
    setGirando(true);

    const giros = 5 + Math.floor(Math.random() * 5);
    const premioIndex = Math.floor(Math.random() * premios.length);
    const nuevoAngulo = 360 * giros + (premioIndex * (360 / premios.length));

    setAngulo(nuevoAngulo);
    setTimeout(() => {
      setPremio(premios[premioIndex]);
      setGirando(false);
    }, 4000);
  };

  return (
    <div className="ruleta-container">
      <div
        className={`ruleta ${girando ? "girando" : ""}`}
        style={{ transform: `rotate(${angulo}deg)` }}
      >
        {premios.map((item, index) => (
          <div key={index} className="segmento" style={{ transform: `rotate(${index * (360 / premios.length)}deg)` }}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={girarRuleta} disabled={girando} className="boton-girar">Girar</button>
      {premio && <div className="resultado">¡Ganaste un {premio}!</div>}
    </div>
  );
};

export default Ruleta;
