import React from "react";


function Testimonio() {
  return(
    <div className="contenedor-testimonio">
      <img 
      className="imagen-testimonio"
        src={require("../imagenes/testimonio-1.PNG")}
        alt="imagen de testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Alex</p>
        <p className="cargo-testimonio">Ingenio</p>
        <p className="texto-testimonio">muchos texto dskdjaskdjjsdasjdk</p>
      </div>
    </div>

  );    
}

export default Testimonio;