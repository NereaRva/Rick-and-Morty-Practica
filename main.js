const ulList = document.querySelector('.listCharacters');

const getDataApi = async (valueInput) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${valueInput}`
  );
  const responseJson = await response.json();
  return responseJson;
};

const valueInput = '';

getDataApi(valueInput)
  .then(result => {
    data(result);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });

function data(data) {
  ulList.innerHTML = '';
  for (const character of data.results) {
    const li = document.createElement("li")
    const card = document.createElement("div")
    card.classList.add("card")
    li.appendChild(card)
    ulList.appendChild(li)
    const text = document.createTextNode(character.name)

    const img = document.createElement("img");
    img.src = character.image;

    const id = document.createElement("p")
    id.innerHTML = character.id

    const location = document.createElement("p")
    location.textContent = character.location.name

    const status = document.createElement("p")
    status.textContent = character.status

    const icons = document.createElement("button");
    icons.classList.add("button");
    icons.innerHTML = '<i class="fa-regular fa-star"></i>';
    icons.style.cursor = "pointer";
    icons.addEventListener('click', () => {
      changeColor(card);
    });
    card.appendChild(img);
    card.appendChild(location);
    card.appendChild(id);
    card.appendChild(status);
    card.appendChild(icons);
  }

  
  const section = document.querySelector("section")
  const ulListFavorite = document.createElement("ul")
  section.appendChild(ulListFavorite)
  
  const favorites = document.querySelectorAll(".button");

  favorites.forEach(button => {
    button.addEventListener('click', () => {
      const parentCard = button.closest('.card');
      console.log(parentCard);
  
      const liFavorite = document.createElement("li");
      liFavorite.innerHTML = parentCard.innerHTML;  
      ulListFavorite.appendChild(liFavorite); 
    });
  });
 
}
function changeColor(card) {
  card.classList.toggle("favorited")
}
