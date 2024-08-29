const res = document.getElementById('res')
const aleatorio = ()=>{
  res.innerHTML = ''
  fetch('https://dog.ceo/api/breeds/image/random',).then((response)=>{
    console.log(typeof response)
    console.log(response)
    return response.json()
  }).then((data)=>{
    let img = document.createElement('img');
    img.src = data.message;
    img.alt = 'Imagem aleatória de um cachorro';
    img.style.width = '300px';
    res.appendChild(img)
  })
}
const carregar = () => {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const racas = data.message
      for (const raca in racas) {
        const option = document.createElement("option")
        option.value = raca
        option.textContent = raca.charAt(0).toUpperCase() + raca.slice(1);
        racaSelecionada.appendChild(option);
      }
    })
    .catch(error => console.log("Erro ao carregar as raças:", error));
};
carregar()
const listar = ()=>{
  res.innerHTML =''
  const racaSelecionada = document.getElementById("racaSelecionada").value
  fetch(`https://dog.ceo/api/breed/${racaSelecionada}/images/random`).then((response)=>{
    return response.json()
  }).then((data)=>{
    let img = document.createElement('img');
    img.src = data.message;
    img.alt = `Imagem aleatória de um cachorro da raça ${racaSelecionada}` ;
    img.style.width = '300px';
    res.appendChild(img)
  })
}
