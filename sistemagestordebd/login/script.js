function iniciarSesion() {
  


    Swal.fire({
      icon: 'success',
      title: 'Conexcion Exitosa',
    }).then(() => {
      window.location.href = '../Sistema_cursos/index.html';
    });
         return false; // Evita el movimiento hacia arriba

}