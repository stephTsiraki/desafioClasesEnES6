export default class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }
  calcularImpuesto() {

    const tasa = 0.21;
    let baseImponible = this._monto_bruto_anual - this._deducciones;
    let impuesto = baseImponible * tasa;
    return impuesto;
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }
  set monto_bruto_anual(nuevoMontoBrutoAnual) {
    this._monto_bruto_anual = nuevoMontoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevasDeducciones) {
    this._deducciones = nuevasDeducciones;
  }

}