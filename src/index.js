function verificar() {
  let nomeHeroi = document.getElementById('txtNome')
  let xp = document.getElementById('xp')
  let res = document.getElementById('res')

  // menor que 1000 = Ferro
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
    //entre 2001 e 5000
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 2000 && xp.value <= 5000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Prata"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 2000 && xp.value <= 5000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Prata"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 2000 && xp.value <= 5000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Prata"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 2000 && xp.value <= 5000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Prata"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    //entre 5001 e 7000
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 5000 && xp.value <= 7000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ouro"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 5000 && xp.value <= 7000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ouro"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 5000 && xp.value <= 7000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ouro"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 5000 && xp.value <= 7000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ouro"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    //entre 7001 e 8000
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 7000 && xp.value <= 8000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Platina"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 7000 && xp.value <= 8000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Platina"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 7000 && xp.value <= 8000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Platina"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 7000 && xp.value <= 8000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Platina"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    // entre 8001 e 9000
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 8000 && xp.value <= 9000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ascendente"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 8000 && xp.value <= 9000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ascendente"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 8000 && xp.value <= 9000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ascendente"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 8000 && xp.value <= 9000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Ascendente"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    // entre 9001 e 10000
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) > 9000 && xp.value <= 10000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Imortal"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) > 9000 && xp.value <= 10000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Imortal"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) > 9000 && xp.value <= 10000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Imortal"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) > 9000 && xp.value <= 10000) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Imortal"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }
    // maior ou igual 10001
    if (nomeHeroi.value == 0 && xp.value == 0) {
      alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      img.setAttribute('id', 'foto')
      if (nomeHeroi.value === "Thor" && Number(xp.value) >= 10001) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Radiante"
        img.setAttribute('src', "./img/Thor.png")
      }
      else if (nomeHeroi.value === "Pantera Negra" && Number(xp.value) >= 10001) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Radiante"
        img.setAttribute('src', "./img/P_Negra.png")
      }
      else if (nomeHeroi.value === "Capitão América" && Number(xp.value) >= 10001) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Radiante"
        img.setAttribute('src', "./img/America.png")
      }
      else if (nomeHeroi.value === "Homem de Ferro" && Number(xp.value) >= 10001) {
        res.innerHTML = "O " + nomeHeroi.value + " está no nivel Radiante"
        img.setAttribute('src', "./img/H_Ferro.png")
      }
    }

    res.appendChild(img)
  }
}

function resultado() {
  res.innerHTML = ''
}