function camposCorrectos({ titulo }) {
    if (titulo == "" || titulo.trim() == "") {
        Swal.fire({
            title: "Error!",
            text: "El titulo no puede estar vacio",
        });
        return false;
    }
    return true;
}