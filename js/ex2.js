// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];
// JavaScript code




function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var registry = new RegExp(input)
  return countryList.filter(function(country) {
	  if (country.toLowerCase().match(registry)) {
  	  return country;
	  }
  });
}

function showResults(val) {
  res = document.getElementById("suggestions");
  res.innerHTML = '';
  let list = '';
  let word = autocompleteMatch(val);
  for (i = 0; i < word.length; i++) {
    list += '<li>' + word[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}
