

function Carta (props) {
    return (  
          <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <img src={props.datos.picture.large} alt=""/>
            <div class="contenedor-info">
                  <div class="info">
                    <p class="titulo">{props.datos.name.first}  {props.datos.name.last}</p>
                    <span class="categoria">{props.datos.name.first}  {props.datos.name.last}</span>
                    
                    {/* <span class="categoria">Origin: {props.datos.origin.name}</span> */}
                  </div>
                  <div class="fondo"></div>
            </div>
          </div>
        </div>

    )};
export default Carta;