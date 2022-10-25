document.getElementById("recomendacion").addEventListener("click", ()=>{
    const contenedorResultado = document.getElementById("resultado-busqueda");
    fetch("./recomendaciones.JSON")
    .then(res=> res.json())
    .then(canciones => {
        canciones.forEach(({titulo, duracion, cantante, banda}) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <hr> 
            ${titulo} - 
            ${duracion && duracion + " minutos -"}
            ${cantante && cantante + " - "}
            ${banda && banda + " - "}`;
        
            contenedorResultado.appendChild(div);
            });
        })
})