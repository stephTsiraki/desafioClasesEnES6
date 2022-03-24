

export default class Cliente {
  constructor(nombre,impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto || {};
  }
  /* Se pide que se implemente el método para calcular impuestos en la clase CLIENTE, pero 
  no supe acceder a las propiedades de la clase impuestos cuyos argumentos (deducciones y monto bruto anual)
  me permitirían realizar el cálculo. Interpolación no resultó =(  entonces desarrollé el método en la 
  clase impuestos.
  
  calcularImpuesto() {
    const tasa = 0.21;
    let baseImponible  = 0 ;
    return baseImponible*tasa;
  }
  */
  
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  
}
