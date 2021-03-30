import Header from "./components/Header";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import database from "./database.json"

function App() {
  return (
    <div className="App">
     <body>
    <div>
    <Header/>
    <div class="contenedor">
    <div class="contenedor-cards">  
    {
       database.map(function(dato, idx) {
        return < Carta datos={dato} key={idx}/>
      })
                }
    </div>
    </div>

    <Footer/>
     </div>
     </body>

    </div>
  );
}

export default App;
