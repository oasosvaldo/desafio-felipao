function verificar() {
  var nomeHeroi = document.getElementById('txtNome')
  var xp = document.getElementById('xp')

  if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    res.innerHTML = "Que Heroi"
  }
}

function resultado() {
  res.innerHTML = ''
}