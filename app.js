const projectsWindow = [
  {
    mdltitle: 'Chinese Meal Generator',
    description: ' API meals generator that displays various chinese meals with an image, ingredients, and preparation steps.',
    imageLink: './assets/chinese meal generator.svg',
    languages: ['html', 'css', 'javascript'],
    role: 'Front end dev',
    company: 'Microverse',
    year: '2023',
    sourceLink: 'https://github.com/Hisoka37/JavaScript_Capstone_ThemealdbApi',
    demoLink: 'https://hisoka37.github.io/JavaScript_Capstone_ThemealdbApi/',
  },
  {
    mdltitle: 'Math Magicians',
    description: 'Math magicians a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read random math quote',
    imageLink: './assets/math magicians.jpg',
    languages: ['html', 'css', 'React.js'],
    role: 'Front end dev',
    company: 'Microverse',
    year: '2023',
    sourceLink: 'https://github.com/Hisoka37/Math-Magicians',
    demoLink: 'https://math-magicians-mmll.onrender.com/',
  },
  {
    mdltitle: 'Space Travelers Hub',
    description: 'is a project that help clients all around the world have access to reserving space flights and work on missions sponsored by SPACE-X ',
    imageLink: './assets/space hub .png',
    languages: ['html', 'css', 'React.js'],
    role: 'Front end dev',
    company: 'Microverse',
    year: '2023',
    sourceLink: 'https://github.com/Hisoka37/Space-Travelers-Hub',
    demoLink: 'https://space-hub-2unx.onrender.com/',
  },
  {
    mdltitle: 'Uber Navigation',
    description: 'a Book Store web application built using React.js, HTML5 and CSS3. It allows users to add and store books in a database using an API.',
    imageLink: './assets/bookstore.jpg',
    languages: ['html', 'css', 'React.js'],
    role: 'Front end dev',
    company: 'Microverse',
    year: '2022',
    sourceLink: 'https://github.com/Hisoka37/Bookstore-React',
    demoLink: 'https://bookstore-i236.onrender.com/',
  },

];

const cards = document.querySelector('.card');
const popUpTitle = document.querySelector('.modaltitle');
const popUpDescription = document.querySelector('.modaldescreption');
const popUpPhoto = document.querySelector('.modalpicture');
const popUpSeeSource = document.querySelector('.seesource');
const popUpSeeLive = document.querySelector('.seelive');
const popUpContent = document.querySelector('.modalcontent1');
const modalpopup = document.querySelector('.modalpopup');
const popUpCompany = document.querySelector('#companyname');
const popUpRole = document.querySelector('#role');
const popUpYear = document.querySelector('#year');

cards.innerHTML = '';
for (let i = 0; i < projectsWindow.length; i += 1) {
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

for (let i = 0; projectsWindow.length; i += 1) {
  document.querySelector(`#seeproject-${i}`).addEventListener('click', () => {
    let modalTechnology = '';

    projectsWindow[i].languages.forEach((languagess) => {
      modalTechnology += `
            <li class="language">${languagess}</li>
          `;
    });

    popUpTitle.innerHTML = projectsWindow[i].mdltitle;
    popUpPhoto.src = projectsWindow[i].imageLink;
    popUpDescription.innerHTML = projectsWindow[i].description;
    popUpCompany.innerHTML = projectsWindow[i].company;
    popUpYear.innerHTML = projectsWindow[i].year;
    popUpRole.innerHTML = projectsWindow[i].role;
    popUpContent.innerHTML = modalTechnology;
    popUpSeeSource.setAttribute('href', `${projectsWindow[i].sourceLink}`);
    popUpSeeLive.setAttribute('href', `${projectsWindow[i].demoLink}`);
    modalpopup.style.display = 'block';
    document.querySelector('main').style.filter = ' blur(5px)';
    document.querySelector('header').style.filter = ' blur(5px)';
  });
}

// Close Modal FOR THE POP WINDOWS

function CloseModal() {
  modalpopup.style.display = 'none';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('header').style.filter = ' blur(0)';
}
CloseModal.addEventListener('click', CloseModal);

// Form Validation
