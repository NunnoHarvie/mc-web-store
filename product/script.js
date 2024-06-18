const discordButton = document.querySelector('.discord-button');

discordButton.addEventListener('mouseover', () => {
  discordButton.style.transform = 'scale(1.05)'; 
  discordButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
});

discordButton.addEventListener('mouseout', () => {
  discordButton.style.transform = 'scale(1)'; 
  discordButton.style.boxShadow = 'none'; 
});

const rankGrid = document.querySelector('.rank-prod');

rankGrid.addEventListener('mouseover', () => {
  rankGrid.style.transform = 'scale(1.05)'; 
  rankGrid.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
});

rankGrid.addEventListener('mouseout', () => {
  rankGrid.style.transform = 'scale(1)'; 
  rankGrid.style.boxShadow = 'none'; 
});