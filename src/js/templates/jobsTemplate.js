import jobsData from '..//json/jobs.json' assert { type: 'json' };

let templateArray = [];
let template;
//Se itera el json buscando trabajos y appendeando con string literals a la variable template.
jobsData.forEach(job => {
  template = `
    <div class='card border-dark mb-3' style='max-width: 540px'>
        <div class='row g-0 flex-grow-1'>
            <div class='col-md-4 card-header d-flex align-items-center justify-content-center'>
                <img src='${job['img-src']}' class='img-fluid cardImg' alt='Logo SM y S'/>
            </div>
            <div class='col-md-8'>
                <div class='card-body'>
                    <h5 class='card-title'>${job.job}</h5>
                    <p class='card-text'>${job.place}</p>
                    <ul>
    `;
  job.duties.forEach(duty => {
    template += `<li>${duty}</li>`;
  });
  template += `
                    </ul>
                    <p class='card-text'><small class='text-muted'><strong>${job['start-date']} - ${job['finish-date']}</strong></small></p>
                </div>
              </div>
          </div>
      </div>
    `;
  //cuando se termina de armar el template de html en string se lo pushea a un array de templates.
  templateArray.push(template);
  console.log(templateArray);
});

// Se agregan al dom los templates del array
templateArray.forEach(template => {
  document.getElementById('cardBoardId').insertAdjacentHTML('afterbegin', template);
});
