const plateCounter = (pesoTotal, pesoBarra, unidad) => {
  // Inicializar el resultado como un objeto vacío
  const resultado = {}

  // Devolver Error si existen anomalías
  if (pesoTotal < pesoBarra) {
    resultado.error = 'Minimum weight liftable is the bar weight'
  }

  // Peso de los discos disponibles en kg y lbs
  const discosKg = [25, 20, 15, 10, 5, 2.5, 2, 1.5, 1, 0.5]
  const discosLb = [55, 45, 35, 25, 10, 5, 2.5, 1.25]

  // Restar el peso de la barra
  pesoTotal -= pesoBarra

  // Calcular el peso final por lado
  let pesoPorLado = pesoTotal / 2

  // Elegir los discos según la unidad
  const discos = unidad === 'Lbs' ? discosLb : discosKg

  // Recorrer los discos disponibles y calcular cuántos de cada uno se necesitan
  for (let i = 0; i < discos.length; i++) {
    const disco = discos[i]
    const cantidad = Math.floor(pesoPorLado / disco)

    if (cantidad > 0) {
      resultado[disco] = cantidad
      pesoPorLado -= disco * cantidad
    }
  }

  // Revisar si queda peso sin asignar
  if (pesoPorLado !== 0) {
    resultado.unallocated = (pesoPorLado * 2).toFixed(2)
  }
  return resultado
}

export default plateCounter
