function verificar() {
  let nomeHeroi = document.getElementById('txtNome')
  let xp = document.getElementById('xp')
  let res = document.getElementById('res')

  if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nomeHeroi.value === "Thor" && xp.value < 1000) {
      res.innerHTML = "Ferro"
    }
  }
}

function resultado() {
  res.innerHTML = ''
}