const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// function to remove articles for sorting
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// sort bands
bands.sort((a, b) => {
  return removeArticle(a).localeCompare(removeArticle(b));
});

// get ul
const bandList = document.getElementById('band');

// append li items
bands.forEach(band => {
  const li = document.createElement('li');
  li.innerText = band;
  bandList.appendChild(li);
});
