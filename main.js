document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon(){
    let name = document.querySelector('input').value.toLowerCase()
    const url =`https://pokeapi.co/api/v2/pokemon/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('.placeholderName').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            document.querySelector('img').src = data.sprites.front_default
            document.querySelector('.type').innerText = data.types[0].type.name.toUpperCase()
            document.querySelector('.weight').innerText = data.weight + ' lbs'
            document.querySelector('.height').innerText = data.height + '"'
            document.querySelector('.pokeNum').innerText = data.id
            return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        })
            .then(response2 => response2.json())
            .then(data2 => {
                console.log(data2)
                document.querySelector('.details').innerText = data2.flavor_text_entries[0].flavor_text
            })
            .catch(err => {
            console.error(err);
    });
}