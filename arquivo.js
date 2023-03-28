// Inicializar objeto Tamagotchi
const tamagotchi = {
  saude: 100,
  fome: 0,
  felicidade: 100,
  alimentar: function() {
    this.fome -= 10;
    this.felicidade += 5;
    this.atualizarStatus();
  },
  brincar: function() {
    this.fome += 5;
    this.felicidade += 10;
    this.atualizarStatus();
  },
  dormir: function() {
    this.saude += 10;
    this.fome += 5;
    this.atualizarStatus();
  },
  atualizarStatus: function() {
    document.getElementById("saude").textContent = this.saude;
    document.getElementById("fome").textContent = this.fome;
    document.getElementById("felicidade").textContent = this.felicidade;
    this.atualizarImagem();
  },
  atualizarImagem: function() {
    let imagem;
    if (this.saude < 50) {
        imagem = "doente_.gif";
      } else {
        imagem = "saudavel_.gif";
      }
      if (this.felicidade < 50) {
        imagem += "triste.gif";
      } else {
        imagem += "feliz.gif";
    }
    document.getElementById("tamagotchi").style.backgroundImage = `url('img/${imagem}')`;
  }
};

// Anexar ouvintes de eventos aos botões
document.getElementById("alimentar").addEventListener("click", function() {
  tamagotchi.alimentar();
});
document.getElementById("brincar").addEventListener("click", function() {
  tamagotchi.brincar();
});
document.getElementById("dormir").addEventListener("click", function() {
  tamagotchi.dormir();
});

// Atualizar o status do Tamagotchi a cada segundo
setInterval(function() {
  tamagotchi.saude -= 1;
  tamagotchi.fome += 1;
  tamagotchi.felicidade -= 1;
  tamagotchi.atualizarStatus();
}, 1000);