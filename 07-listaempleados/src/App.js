import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EmpleadoList from './components/EmpleadoList'

function App() {
  
  return (
  <div className='App'>
    <section className="d-flex justify-content-center">
      <EmpleadoList></EmpleadoList>
    </section>
  </div>
  );
}

export default App;
