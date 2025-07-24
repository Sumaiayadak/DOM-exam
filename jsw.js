const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');


for (let i = 0; i < sections.length; i++) {
  let section = sections[i];

  let li = document.createElement('li');
  let a = document.createElement('a');

  a.textContent = section.getAttribute('data-nav');
  a.href = "#" + section.id;
  

  li.appendChild(a);
  navList.appendChild(li);
}

