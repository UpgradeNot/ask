import React,{useState} from 'react'
import PropTypes from 'prop-types'

function ChangeStateConect(cliente) {

    let [conectSet, setconectSet] = useState(cliente.props.conect);
    const change = () => {
        setconectSet(conectSet = !conectSet)
    } 
  return (
    <div>
        <h1><b>{conectSet ? "Contacto En Línea" : "Contacto No Disponible"}</b></h1>
        <button onClick={change}>Presiona para cambiar el estado</button>
    </div>
  )
}



ChangeStateConect.propTypes = {
    conectSet: PropTypes.bool,
}

export default ChangeStateConect
