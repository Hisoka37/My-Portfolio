const projectsWindow = [
  {
    mdltitle: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/First Snapshoot Portfolio.svg',
    languages: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
    demoLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
  },
  {
    mdltitle: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/secod Snapshoot Portfolio.svg',
    languages: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
    demoLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
  },
  {
    mdltitle: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: './assets/third Snapshoot Portfolio.svg',
    languages: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
    demoLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
  },
  {
    mdltitle: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    imageLink: '/assets/last Snapshoot Portfolio.svg',
    languages: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
    demoLink: 'https://github.com/Hisoka37/Mobile-Portfolio',
  },
];
const cards = document.querySelector('.card');
const popUpTitle = document.querySelector('.modalheader');
const popUpDescription = document.querySelector('.modaldescreption');
const popUpPhoto = document.querySelector('.modalpicture');
const popUpSeeSource = document.querySelector('.seesource');
const popUpSeeLive = document.querySelector('.seelive');
const popUpContent = document.querySelector('.modalcontent1');
const popUpBack = document.querySelector('.modalpopup');
const popUpCompany = document.querySelector('#companyname');
const popUpRole = document.querySelector('#role');
const popUpYear = document.querySelector('#year');

cards.innerHTML = '';
for (let i = 0; i < projectsWindow.length; i++) {
  let techLanguages = '';
  projectsWindow[i].languages.forEach((projTech) => {
    techLanguages += `<li class="language">${projTech}</li>`;
  });
  cards.innerHTML += `
    <div class="grid-container">
      <div class="first-card">
        <img class="card-img" src="${projectsWindow[i].imageLink}" alt="">
        <div class="my-project">
          <h2 class="project-name">${projectsWindow[i].mdltitle}</h2>
          <div class="experience">
            <span class="tag1">${projectsWindow[i].company}</span>
            <span class="bullet">&#x2022;</span>
            <span class="tag">${projectsWindow[i].role}</span>
            <span class="bullet">&#x2022;</span>
            <span class="tag">${projectsWindow[i].year}</span>
          </div>
          <div class="descreption">
            <p> ${projectsWindow[i].description}</p>
          </div>
          <div class="tech">
            <ul class=" worktech  modaltech ">
            ${techLanguages}
            </ul>
          </div>
          <button class="see-project" id ="seeproject-${i}">See Project</button>
        </div>
      </div>
    </div>
    `;
}

for (let i = 0; projectsWindow.length; i++) {
  document.querySelector(`#seeproject-${i}`).addEventListener('click', function()  {
    let modaltechnology = '';

    projectsWindow[i].languages.forEach((languagess) => {
      modaltechnology += `
          <li class="language">${languagess}</li>
        `;
    });
    popUpTitle.innerHTML = projectsWindow[i].mdltitle;
    popUpPhoto.src = projectsWindow[i].imageLink;
    popUpDescription.innerHTML = projectsWindow[i].description;
    popUpCompany.innerHTML = projectsWindow[i].company;
    popUpYear.innerHTML = projectsWindow[i].year;
    popUpRole.innerHTML = projectsWindow[i].role;
    modalcontent1.innerHTML = modaltechnology;
    popUpSeeSource.setAttribute('href', `${projectsWindow[i].sourceLink}`);
    popUpSeeLive.setAttribute('href', `${projectsWindow[i].demoLink}`);
    modalpopup.style.display = 'block';
    document.querySelector('main').style.filter = ' blur(5px)';
    document.querySelector('header').style.filter = ' blur(5px)';
  });
}
// Close Modal
function CloseModal() {
  modalpopup.style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
}