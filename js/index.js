// Ejercicio: Crea una lista de usuarios con LocalStorage.
// - Crear un form con nombre, email, teléfono
// - Cuando pulses "guardar", se añade el usuario a LocalStorage
// - Se debe refrescar el HTML con la lista de usuarios que hay en LocalStorage
// - Botón para borrar usuario específico
// - Botón para borrar todos los usuarios
// - Podemos añadir un avatar random para cada usuario: http://avatars.adorable.io/
// - Puede ser de ayuda JSON.parse() y JSON.stringify() para guardar múltiples datos en una misma key

function meterDatos() {
  let name = localStorage.setItem(
    "nombre",
    document.getElementById("name").value
  );
  let email = localStorage.setItem(
    "email",
    document.getElementById("email").value
  );
  let phone = localStorage.setItem(
    "telefono",
    document.getElementById("phone").value
  );
}

function escribirDatos() {
  let info = `
  <ul>
        <li>${localStorage.getItem("nombre")}</li>
        <li>${localStorage.getItem("email")}</li>
        <li>${localStorage.getItem("telefono")}</li>
        </ul>`;
  document.getElementById("listado").innerHTML += info;
}

document.getElementById("save").onclick = () => {
  meterDatos();
};

escribirDatos();

// document.getElementById(clearAll).onclick=()=>{
//   localStorage.clear();
// }

// let name=localStorage.setItem("nombre", "marta");
// let email=localStorage.setItem("email", "pulido");
// let phone=localStorage.setItem("telefono", "2525");
// let arr=[];
// arr.push(localStorage.getItem("nombre"));  arr.push(localStorage.getItem("email"));
// arr.push(localStorage.getItem("telefono"));
// console.log(arr);
// let obj=(localStorage.setItem())
// let arr=localStorage.getItem("nombre");
// arr=JSON.parse(arr);
// console.log(arr);
