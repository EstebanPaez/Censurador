import Censurador from './censura.js';

const censurador = new Censurador();

document.getElementById('go').addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const words = document.getElementById('text-words').value;
  censurador.defineInput(text, words);
  censurador.censure();
  document.querySelector('body').classList.add('fixed');
  document.querySelector('.container-result').classList.add('active');
  censurador.render();
});
document
  .querySelector('.up')
  .addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelector('.clear').addEventListener('click', () => {
  document.querySelector('.container-result').classList.remove('active');
  document.querySelector('body').classList.remove('fixed');
});
