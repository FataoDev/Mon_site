// Récupère le bouton d'inscription et le popup d'inscription
const inscriptionBtn = document.querySelector('#inscription-btn');
const inscriptionPopup = document.querySelector('#inscription-popup');

// Récupère le bouton de connexion et le popup de connexion
const connexionBtn = document.querySelector('#connexion-btn');
const connexionPopup = document.querySelector('#connexion-popup');

// Récupère les éléments de fermeture des popups
const inscriptionClose = document.querySelector('#inscription-popup .close');
const connexionClose = document.querySelector('#connexion-popup .close');

// Ajoute un événement de clic sur le bouton d'inscription
// Ajoute un événement de clic sur le bouton d'inscription
inscriptionBtn.addEventListener('click', () => {
    inscriptionPopup.style.display = 'block';
  });
  inscriptionClose.onclick=() => {
    inscriptionPopup.style.display = 'none';
  };
  // Ajoute un événement de clic sur le bouton de connexion
  connexionBtn.addEventListener('click', () => {
      connexionPopup.style.display = 'block';
    });
    connexionClose.onclick=() => {
      connexionPopup.style.display = 'none';
    };
    