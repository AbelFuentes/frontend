const POKEAPI_URL = 'https://pokeapi.co/api/v2';

const GET_POKEMON = `${POKEAPI_URL}/pokemon`;

const pokedex_header = document.getElementById('pokedex_header');
const pokemon_name = document.getElementById('pokemon_name');
const pokedex_image = document.getElementById('pokedex_image');
const pokemon_type_primary = document.getElementById('pokemon_type_primary');
const pokemon_type_secondary = document.getElementById('pokemon_type_secondary');
const first_pokemon_type_weakness = document.getElementById('first_pokemon_type_weakness');
const second_pokemon_type_weakness = document.getElementById('second_pokemon_type_weakness');
const third_pokemon_type_weakness = document.getElementById('third_pokemon_type_weakness');
const fourth_pokemon_type_weakness = document.getElementById('fourth_pokemon_type_weakness');
const fifth_pokemon_type_weakness = document.getElementById('fifth_pokemon_type_weakness');
const sixth_pokemon_type_weakness = document.getElementById('sixth_pokemon_type_weakness');
const seventh_pokemon_type_weakness = document.getElementById('seventh_pokemon_type_weakness');
const pokemon_hit_points = document.getElementById('pokemon_hit_points');
const pokemon_attack = document.getElementById('pokemon_attack');
const pokemon_defense = document.getElementById('pokemon_defense');
const pokemon_special_attack = document.getElementById('pokemon_special_attack');
const pokemon_special_defense = document.getElementById('pokemon_special_defense');
const pokemon_speed = document.getElementById('pokemon_speed');
const pokemon_moves = document.getElementById('pokemon_moves');

pokemon_name.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        get_pokemon();
    }
});

const hide_types = () => {
    pokemon_type_primary.style.display = 'none';
    pokemon_type_secondary.style.display = 'none';
};

const hide_weakness = () => {
    first_pokemon_type_weakness.style.display = 'none';
    second_pokemon_type_weakness.style.display = 'none';
    third_pokemon_type_weakness.style.display = 'none';
    fourth_pokemon_type_weakness.style.display = 'none';
    fifth_pokemon_type_weakness.style.display = 'none';
    sixth_pokemon_type_weakness.style.display = 'none';
    seventh_pokemon_type_weakness.style.display = 'none';
};

hide_types();
hide_weakness();

const api_get_pokemon_by_name = async (name) => {
    try {
        return await fetch(`${GET_POKEMON}/${name}`)
            .then((response) => response.json())
            .then((data) => ({
                pokedex_number: data.id,
                image_url: data.sprites.front_default,
                types: data.types.map((type) => ({ name: type.type.name, url: type.type.url })),
                stats: data.stats.map((stat) => ({ value: stat.base_stat, label: stat.stat.name })),
                moves: data.moves.map((move) => move.move.name),
            }));
    } catch (error) {
        return { image_url: undefined, types: [] };
    }
};

const api_get_pokemon_type = async (url) => {
    try {
        return await fetch(url)
            .then((response) => response.json())
            .then((data) => ({
                double_damage_from: data.damage_relations.double_damage_from.map((type) => type.name),
                half_damage_from: data.damage_relations.half_damage_from.map((type) => type.name),
                no_damage_from: data.damage_relations.no_damage_from.map((type) => type.name),
            }));
    } catch (error) {
        return [];
    }
};

const get_pokemon = async () => {
    if (pokemon_name.value === '') { return; }
    set_pokedex_image('./assets/loading.gif');
    api_get_pokemon_by_name(pokemon_name.value.toLowerCase())
        .then((pokemon) => {
            setTimeout(() => {
                set_pokedex_header(pokemon.pokedex_number);
                set_pokedex_image(pokemon.image_url);
                set_types(pokemon.types);
                set_stats(pokemon.stats);
                set_moves(pokemon.moves);
            }, 1500);
        });
};

const set_pokedex_header = (pokedex_number) => {
    const name = pokemon_name.value.toLowerCase().replace(/^\w/, c => c.toUpperCase());
 
    try {
        if (name && pokedex_number) {
            pokedex_header.innerHTML = `#${pokedex_number} - ${name}`;
        } else {
            pokedex_header.innerHTML = '';
        }
    } catch (error) {
        pokedex_header.innerHTML = '';
    }
};

const set_pokedex_image = (image_url) => {
    try {
        if (image_url) { pokedex_image.src = image_url; }
        else { pokedex_image.src = './assets/no-pokemons-found.png'; }
    } catch (error) {
        pokedex_image.src = './assets/pokeball.png';
    }
};

const set_types = async (types) => {
    try {
        const primary_type = types[0];
        const secondary_type = types[1] ?? undefined;
        const pokemon_weakness = [];

        if (primary_type) {
            pokemon_type_primary.style.display = '';
            pokemon_type_primary.src = `./assets/types/${primary_type.name}.png`;
            pokemon_type_primary.width = 50;
            pokemon_type_primary.height = 25;

            const primary_damage_relations = await api_get_pokemon_type(primary_type.url);
            pokemon_weakness.push(primary_damage_relations);
        } else {
            pokemon_type_primary.style.display = 'none';
        }

        if (secondary_type) {
            pokemon_type_secondary.style.display = '';
            pokemon_type_secondary.src = `./assets/types/${secondary_type.name}.png`;
            pokemon_type_secondary.width = 50;
            pokemon_type_secondary.height = 25;

            const secondary_damage_relations = await api_get_pokemon_type(secondary_type.url);
            pokemon_weakness.push(secondary_damage_relations);
        } else {
            pokemon_type_secondary.style.display = 'none';
        }
        hide_weakness();
        set_weakness(pokemon_weakness);
    } catch (error) {
        hide_types();
    }
};

const set_weakness = (pokemon_weakness) => {
    let correct_weakness = [];

    for (let i = 0; i < pokemon_weakness.length; i++) {
        correct_weakness = [...correct_weakness, ...pokemon_weakness[i].double_damage_from];
    }

    for (let i = 0; i < pokemon_weakness.length; i++) {
        correct_weakness = correct_weakness
            .filter((type) => !pokemon_weakness[i].half_damage_from.includes(type))
            .filter((type) => !pokemon_weakness[i].no_damage_from.includes(type));
    }

    correct_weakness = correct_weakness.filter((type, index) => correct_weakness.indexOf(type) === index);

    for (let i = 0; i < correct_weakness.length; i++) {
        if (i === 0) {
            first_pokemon_type_weakness.style.display = '';
            first_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            first_pokemon_type_weakness.width = 50;
            first_pokemon_type_weakness.height = 25;
        }
        if (i === 1) {
            second_pokemon_type_weakness.style.display = '';
            second_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            second_pokemon_type_weakness.width = 50;
            second_pokemon_type_weakness.height = 25;
        }
        if (i === 2) {
            third_pokemon_type_weakness.style.display = '';
            third_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            third_pokemon_type_weakness.width = 50;
            third_pokemon_type_weakness.height = 25;
        }
        if (i === 3) {
            fourth_pokemon_type_weakness.style.display = '';
            fourth_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            fourth_pokemon_type_weakness.width = 50;
            fourth_pokemon_type_weakness.height = 25;
        }
        if (i === 4) {
            fifth_pokemon_type_weakness.style.display = '';
            fifth_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            fifth_pokemon_type_weakness.width = 50;
            fifth_pokemon_type_weakness.height = 25;
        }
        if (i === 5) {
            sixth_pokemon_type_weakness.style.display = '';
            sixth_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            sixth_pokemon_type_weakness.width = 50;
            sixth_pokemon_type_weakness.height = 25;
        }
        if (i === 6) {
            seventh_pokemon_type_weakness.style.display = '';
            seventh_pokemon_type_weakness.src = `./assets/types/${correct_weakness[i]}.png`;
            seventh_pokemon_type_weakness.width = 50;
            seventh_pokemon_type_weakness.height = 25;
        }
    }
};

const set_stats = (stats) => {
    for (let i = 0; i < stats.length; i++) {
        if (stats[i].label === 'hp') {
            pokemon_hit_points.value = stats[i].value;
        }
        if (stats[i].label === 'attack') {
            pokemon_attack.value = stats[i].value;
        }
        if (stats[i].label === 'defense') {
            pokemon_defense.value = stats[i].value;
        }
        if (stats[i].label === 'special-attack') {
            pokemon_special_attack.value = stats[i].value;
        }
        if (stats[i].label === 'special-defense') {
            pokemon_special_defense.value = stats[i].value;
        }
        if (stats[i].label === 'speed') {
            pokemon_speed.value = stats[i].value;
        }
    }
};

const set_moves = (moves) => {
    let innerHTML = '';
    for (let i = 0; i < moves.length; i++) {
        innerHTML += `<li>${moves[i]}</tr>`;
    }
    pokemon_moves.innerHTML = innerHTML;
};
