// Ejercicio: Crea una lista de usuarios con LocalStorage.
// - Crear un form con nombre, email, teléfono
// - Cuando pulses "guardar", se añade el usuario a LocalStorage
// - Se debe refrescar el HTML con la lista de usuarios que hay en LocalStorage
// - Botón para borrar usuario específico
// - Botón para borrar todos los usuarios
// - Podemos añadir un avatar random para cada usuario: http://avatars.adorable.io/
// - Puede ser de ayuda JSON.parse() y JSON.stringify() para guardar múltiples datos en una misma key
let arr = [];


function meterDatos() {
  // if(localStorage.getItem("usuarios")){
  //   arr=JSON.parse(localStorage.getItem("usuarios"));
  // }
  // else{
  //   arr = [];
  // }
  localStorage.getItem("usuarios")
    ? (arr = JSON.parse(localStorage.getItem("usuarios")))
    : (arr = []);

  let newDat = {
    nombre: document.getElementById("name").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("phone").value,
  };
  arr.push(newDat);
  localStorage.setItem("usuarios", JSON.stringify(arr));
}

function escribirDatos() {
  let data = JSON.parse(localStorage.getItem("usuarios"));
  console.log(data);
  for (i = 0; i < data.length; i++) {
    let info = `
    <div id="data">
    <img src="https://api.adorable.io/avatars/50/${data[i].email}.png" alt="avatar${i}">
  <p class="dataName">${data[i].nombre}</p>
  <p class="dataMail">${data[i].email}</p>
  <p class="dataPhone">${data[i].telefono}</p><br>
  </div>`;
    document.getElementById("listado").innerHTML += info;
  }
}
document.getElementById("save").onclick = () => {
  meterDatos();
};
// document.getElementById("reset").onclick = () => {
//   localStorage.clear();
// };
escribirDatos();
