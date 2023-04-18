const myOpen = document.querySelector('.burger');
const nav = document.querySelector('.header-menu');
const myClose = document.querySelector('.close');
const myLinks = document.querySelector('.links');

myOpen.onclick = () => {
  nav.classList.add('open');
  myOpen.classList.add('display');
};
myClose.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
myLinks.onclick = () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
};
const secLink = document.getElementById('myProgram');
secLink.addEventListener('click', () => {
  nav.classList.remove('open');
  myOpen.classList.remove('display');
});
const thirdLink = document.getElementById('join');
thirdLink.addEventListener('click', () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
});
const fourLink = document.getElementById('sponsor');
fourLink.addEventListener('click', () => {
  this.parentElement.classList.remove('open');
  myOpen.classList.remove('display');
});

const projectDetails = [
  {
    name: 'Usain Bolt',
    description: 'First Man in Olympic History to Win Both the 100m & 200m Races in World Record Times',
    featuredImage: './images/fd3b9c574286abf0af140a8a1a3922de.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',

  },
  {
    name: 'Gwen Jorgensen',
    description: 'American Professional Triathlete, Olympic Champion',
    featuredImage: './images/Gwen_Jorgensen.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',
  },
  {
    name: 'Kathrine Switzer',
    description: 'Author, TV Commentator & Marathon Runner; Best Known as the First Woman to Run the Boston Marathon as a Numbered Entry',
    featuredImage: './images/Switzer_new_.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',
  },
  {
    name: 'Carmelita Jeter',
    description: 'Olympic Champion, Motivational Speaker, World Record Holder & Assistant Sprints Coach USC',
    featuredImage: './images/Jeter_Carmelita.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',
  },
  {
    name: 'Dean Karnazes',
    description: 'The “Ultramarathon Man”, Ran 3,000 Miles Across the Country with Live! with Regis and Kelly’s “Run Across America” in 2011',
    featuredImage: './images/dean-karnazes-2018.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',
  },
  {
    name: 'Gwen Jorgensen',
    description: 'American Professional Triathlete, Olympic Champion',
    featuredImage: './images/Gwen_Jorgensen.jpg',
    technologies: 'titled I Am Bolt, was released on November 28, 2016 in United Kingdom.',
  },
];
const root = document.getElementById('speakers-ul');
for (let i = 0; i < projectDetails.length; i += 1) {
  root.innerHTML += `
  <li class="speakers-list">
  <img src="${projectDetails[i].featuredImage}" alt="">
  <div class="list-info">
      <h4>${projectDetails[i].name}</h4>
      <p>  ${projectDetails[i].description} </p>          
      <hr>
      <p>${projectDetails[i].technologies}</p>
  </div>
</li>
  `;
}