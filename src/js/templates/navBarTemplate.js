function navBarInsert() {
  const bodyId = document.getElementById("bodyId");
  bodyId.insertAdjacentHTML("afterbegin",`
    <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
            <a class='navbar-brand'>Alan G. Ascorti</a>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li class='nav-item'><a class='nav-link active' aria-current='page' href='index.html'>Acerca de Mi</a></li>
                    <li class='nav-item'><a class='nav-link' href='education.html'>Estudios</a> </li>
                    <li class='nav-item'><a class='nav-link' href='jobs.html'>Trabajos</a> </li>
                    <li class='nav-item'><a class='nav-link' href='contact.html'>Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>`
  );
}

navBarInsert();
