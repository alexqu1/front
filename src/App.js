import logo from './logo.svg';
import Testimonio from './componentes/Testimonio';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Pues un titulo sin mas</h1>
      <Testimonio
      nombre='alex'
      pais='españa'
      imagen='1'
      cargo='ingenierio'
      empresa='spotify'
      testimonio='mucho texto sadhljdhajshdasldjadhalhl'
      />
            <Testimonio
      nombre='alex2'
      pais='francia'
      imagen='2'
      cargo='tecnico'
      empresa='google'
      testimonio='mucho texto mucho texto 2 xsaxa'
      />
      </div>
    </div>
  );
}

export default App;
