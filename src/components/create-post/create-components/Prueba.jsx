import React, { useState } from "react";

const SelectButtonExample = () => {
  const opciones = ["Opción 1", "Opción 2", "Opción 3"];
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [opcionesElegidas, setOpcionesElegidas] = useState([]);

  const actualizarOpcion = (event) => {
    const valorSeleccionado = event.target.value;
    setOpcionSeleccionada(valorSeleccionado);
  };

  const handleClick = () => {
    if (opcionSeleccionada) {
      // Agregar la opción seleccionada al array de opciones elegidas
      setOpcionesElegidas([...opcionesElegidas, opcionSeleccionada]);
      // Limpiar la opción seleccionada para el próximo uso
      setOpcionSeleccionada("");
    }
  };

  return (
    <div>
      <label htmlFor="opciones">Selecciona una opción:</label>
      {/* Input tipo select con opciones */}
      <select
        id="opciones"
        onChange={actualizarOpcion}
        value={opcionSeleccionada}
      >
        <option value="">Selecciona...</option>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>

      {/* Botones renderizados según las opciones elegidas */}
      {opcionesElegidas.map((opcion, index) => (
        <button key={index}>{`Seleccionaste: ${opcion}`}</button>
      ))}

      {/* Botón para agregar la opción seleccionada */}
      <button onClick={handleClick} disabled={!opcionSeleccionada}>
        Agregar Opción
      </button>
    </div>
  );
};

export default SelectButtonExample;
