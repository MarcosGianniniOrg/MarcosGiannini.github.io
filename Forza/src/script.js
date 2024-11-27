// Get player and enemy elements
const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const gameContainer = document.getElementById("game-container");

// Player position
let playerPos = { x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 - 75 };
let speed = 10; // Movement speed

// Initialize enemy position
let enemyPos = { x: 100, y: 100 };

// Movement keys
const keys = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};

// Listen for keydown events
document.addEventListener('keydown', (e) => {
  if (keys[e.key]) {
    movePlayer(keys[e.key].x, keys[e.key].y);
  }
  if (e.key === ' ') { // Space to shoot
    shootBullet();
  }
});

// Move player based on key press
function movePlayer(dx, dy) {
  playerPos.x += dx * speed;
  playerPos.y += dy * speed;

  // Prevent player from going outside of game container
  if (playerPos.x < 0) playerPos.x = 0;
  if (playerPos.x > window.innerWidth - 80) playerPos.x = window.innerWidth - 80;
  if (playerPos.y < 0) playerPos.y = 0;
  if (playerPos.y > window.innerHeight - 150) playerPos.y = window.innerHeight - 150;

  updatePlayerPosition();
}

// Update player's position on screen
function updatePlayerPosition() {
  player.style.left = `${playerPos.x}px`;
  player.style.top = `${playerPos.y}px`;
}

// Shoot bullet function
function shootBullet() {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.left = `${playerPos.x + 35}px`; // Center bullet on player
  bullet.style.top = `${playerPos.y - 5}px`; // Position above player
  gameContainer.appendChild(bullet);

  // Animate the bullet movement
  let bulletInterval = setInterval(() => {
    const bulletPos = bullet.getBoundingClientRect();
    const enemyPos = enemy.getBoundingClientRect();

    // Check for collision with enemy
    if (bulletPos.left < enemyPos.right &&
        bulletPos.right > enemyPos.left &&
        bulletPos.top < enemyPos.bottom &&
        bulletPos.bottom > enemyPos.top) {
      clearInterval(bulletInterval);
      bullet.remove(); // Remove bullet on collision
      enemy.style.backgroundColor = "#ff6347"; // Change enemy color when hit
      setTimeout(() => enemy.style.backgroundColor = "#444", 300); // Reset enemy color
    } else {
      bullet.style.top = `${parseFloat(bullet.style.top) - 10}px`; // Move bullet up
    }

    // Remove bullet if it goes off-screen
    if (parseFloat(bullet.style.top) < 0) {
      clearInterval(bulletInterval);
      bullet.remove();
    }
  }, 20);
}

updatePlayerPosition();
