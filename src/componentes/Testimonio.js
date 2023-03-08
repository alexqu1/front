import React from "react";
import '../estilos/Testimonio.css';

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img 
      className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="imagen de testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}Alex en españa{props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>

  );    
}

export default Testimonio;