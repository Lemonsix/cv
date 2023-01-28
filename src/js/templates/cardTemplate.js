function createCard(json) {
  const cardBoardId = document.getElementById('cardBoardId');
  cardBoardId.insertAdjacentHTML(
    'afterbegin',
    `
    <div class='card border-dark mb-3' style='max-width: 540px'>
        <div class='row g-0 flex-grow-1'>
            <div class='col-md-4 card-header d-flex align-items-center justify-content-center'>
                <img src='src/img/logo_smys.jpg' class='img-fluid cardImg' alt='Logo SM y S'/>
            </div>
            <div class='col-md-8'>
                <div class='card-body'>
                    <h5 class='card-title'>${json.job}</h5>
                    <p class='card-text'>${json.place}</p>
                    <ul>
                        <li>Cuentas corrientes de clientes y proveedores</li>
                        <li>Facturación, planillas de IVA, pago de VEP, homebanking empresas.</li>
                        <li>Ventas</li>
                        <li>Compras Industriales</li>
                        <li>Reparación de PC</li>
                        <li>Dibujo de planos en Autodesk Autocad y diseño industrial en Autodesk Fusion 360</li>
                    </ul>
                    <p class='card-text'><small class='text-muted'><strong>03/2013 - 19/02/2023</strong></small></p>
                </div>
            </div>
        </div>
    </div>
`,
  );
}

import jobsData from './src/json/jobs.json' assert { type: 'json' };
console.log(jobsData);
