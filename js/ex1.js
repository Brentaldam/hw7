const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

function myFunc() {

    var e = document.getElementById("house");
    function onChange() {
        var value = e.value;
        console.log(value);
    }

    var value = e.value;
    var input = document.getElementById("characters");
    var theHouses = document.querySelector('#house');
    var characters = document.querySelector('#characters');
    e.onchange = onChange;
    onChange();
    getCharacters(value);
    theHouses.addEventListener('change', function () { characters.innerHTML = ''; });

    for (i = 0; i < getCharacters(value).length; i++) {
        var row = document.createElement('li');
        input.appendChild(row);
        row.append(getCharacters(value)[i]);
    };

};

addEventListener('change', myFunc);

