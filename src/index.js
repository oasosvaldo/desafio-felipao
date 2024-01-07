function verificar() {
  let nomeHeroi = document.getElementById('txtNome')
  let xp = document.getElementById('xp')
  let res = document.getElementById('res')
  let level = ["Ferro", "Bronze", "Prata Ouro", "Platina Diamante", "Ascendente", "Imortal", "Radiante"]

  if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nomeHeroi.value === "Thor" && Number(xp.value) < 1000) {
      res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ferro"
      img.setAttribute('src', "./img/Thor.png")
    }
    else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) < 1000) {
      res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ferro"
      img.setAttribute('src', "./img/P_Negra.png")
    }
    else if (nomeHeroi.value === "Capitão América" && Number(xp.value) < 1000) {
      res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ferro"
      img.setAttribute('src', "./img/America.png")
    }
    else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) < 1000) {
      res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ferro"
      img.setAttribute('src', "./img/H_Ferro.png")
    }
      
      //entre 1001 e 2000
      if (nomeHeroi.value == 0 && xp.value == 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 1000 && xp.value <= 2000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Bronze"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 1000 && xp.value <= 2000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Bronze"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 1000 && xp.value <= 2000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Bronze"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 1000 && xp.value <= 2000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Bronze"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    res.appendChild(img)
  }
}

function resultado() {
  res.innerHTML = ''
}