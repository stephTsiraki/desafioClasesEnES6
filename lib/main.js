import Cliente from "./cliente.js";
import Impuestos from "./impuestos.js";
let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");
calcular.addEventListener("click", impuestoCliente);

function impuestoCliente(event) {
  event.preventDefault();
  let _nombre = document.getElementById("nombreCliente").value;
  let _monto_bruto_anual = document.getElementById("montoBruto").value;
  let _deducciones = document.getElementById("deduccion").value;
  if (parseInt(_monto_bruto_anual) && parseInt(_deducciones)) {
    let impuesto = new Impuestos(_monto_bruto_anual, _deducciones);
    let cliente = new Cliente(_nombre, impuesto);
    resultado.innerHTML = `El impuesto del Cliente 
    ${cliente._nombre} es: 
    ${impuesto.calcularImpuesto()}.`;
  } else {
    alert("Ingrese un valor numérico en ambas casillas");
  }
}