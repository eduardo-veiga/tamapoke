// Initialize Tamagotchi object
const tamagotchi = {
  health: 100,
  hunger: 0,
  happiness: 100,
  feed: function() {
    this.hunger -= 10;
    this.happiness += 5;
    this.updateStats();
  },
  play: function() {
    this.hunger += 5;
    this.happiness += 10;
    this.updateStats();
  },
  sleep: function() {
    this.health += 10;
    this.hunger += 5;
    this.updateStats();
  },
  updateStats: function() {
    document.getElementById("health").textContent = this.health;
    document.getElementById("hunger").textContent = this.hunger;
    document.getElementById("happiness").textContent = this.happiness;
  }
};

// Attach event listeners to buttons
document.getElementById("feed").addEventListener("click", function() {
  tamagotchi.feed();
});
document.getElementById("play").addEventListener("click", function() {
  tamagotchi.play();
});
document.getElementById("sleep").addEventListener("click", function() {
  tamagotchi.sleep();
});

// Update Tamagotchi stats every second
setInterval(function() {
  tamagotchi.health -= 1;
  tamagotchi.hunger += 1;
  tamagotchi.happiness -= 1;
  tamagotchi.updateStats();
}, 1000);

