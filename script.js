function createFlyingBonus() {
  const bonus = document.createElement('div');
  bonus.classList.add('flying-bonus');
  bonus.textContent = '🎁 +FS';
  bonus.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(bonus);

  setTimeout(() => {
    bonus.remove();
  }, 2000);
}

setInterval(createFlyingBonus, 600);
