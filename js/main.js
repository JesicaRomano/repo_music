class Cancion {
    constructor(titulo, duracion, cantante, banda) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.cantante = cantante;
        this.banda = banda;
    }
}

let canciones = JSON.parse(localStorage.getItem("canciones")) ?? [];
document.getElementById("formulario-canciones").addEventListener("submit", handlerAgregarCancion);

function handlerAgregarCancion(e) {
    e.preventDefault();

    const formulario = new FormData(e.target);
    const titulo = formulario.get("titulo");
    const duracion = formulario.get("duracion");
    const cantante = formulario.get("cantante");
    const banda = formulario.get("banda");

    const cancion = new Cancion(titulo, duracion, cantante, banda);
    
    agregarCancion(cancion)
    e.target.reset();
}

function agregarCancion(cancion) {
    if(camposCorrectos(cancion)) {
        canciones.push(cancion)
        localStorage.setItem("canciones", JSON.stringify(canciones));
        mostrarCanciones();
    }
}

function mostrarCanciones() {
    let listadodeCanciones = document.getElementById("listadodeCanciones");
    listadodeCanciones.innerHTML = "";
    
    canciones.forEach(({titulo, duracion, cantante, banda}) => {
        let li = document.createElement("li");
        li.innerHTML = `
        <hr> 
        ${titulo} - 
        ${duracion && duracion + " minutos -"}
        ${cantante && cantante + " - "}
        ${banda && banda + " - "}`;

        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Borrar";
        botonBorrar.classList.add("btn", "btn-danger");

        botonBorrar.addEventListener("click", () => {
            eliminarCancion(titulo);
        })
        li.appendChild(botonBorrar);

        listadodeCanciones.appendChild(li);
    });
}

function eliminarCancion(titulo) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            canciones = canciones.filter(item => item.titulo != titulo);
            localStorage.setItem("canciones", JSON.stringify(canciones));
            mostrarCanciones();
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
    })
}

mostrarCanciones();

Toastify({
    text: "Bienvenidos, no se olvide de llenar el formulario para que podamos enviar la lista de canciones elegidas",
    duration: 3000,
    newWindow: true,
    close: true, 
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
        background: "linear-gradient(to right, #d38, #d33)",
    },
    onClick: function(){
        
    } 
}).showToast(); 
