const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const changeThemeButtonImage = document.querySelector(".button-image");

changeThemeButton.addEventListener("click", () => {
    const activeDarkMode = body.classList.contains("dark-mode");
    
    body.classList.toggle("dark-mode");
    //alternate the value of the class. Can substitute .add and .remove

    if(activeDarkMode){
        //console.log("dark-mode esta ativo");
        //body.classList.remove("dark-mode");
        changeThemeButtonImage.setAttribute("src", "./src/images/sun.png");
    } else {
        //body.classList.add("dark-mode");

        changeThemeButtonImage.setAttribute("src", "./src/images/moon.png");
    }
});


fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({name:val.name, img:pokemonSingle.sprites.front_default});

                if(pokemonSingle.lenght == 10){

                    //finalizadas aas requisicoes
                    console.log(pokemons);
                }
            })
        })
    })