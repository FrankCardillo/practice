// There is a man, and there is a boat, and there are a lot of animals.
//
// This man wants to get his animals onto the boat, but only in pairs, and in alphabetical order.
// If there are any excess animals they are to be cruelly abandoned.
// He has developed a helpful to code to make life easier,
// where animals are referred to by the first letter of their name.
// Unfortunately there are more than 26 animals, for example there are 'g' - Gerbils
// and 'G' - Giraffes. These are very different animals and if they got mixed up it could be a disaster!
//
// The animals are currently in a long and disorganised queue.
// like so ['g','p','h','g','c','c']
// In this case we can see that there are two gerbils, one pelican, one hamster, and two cats.
// They are out of order.
//
// Your job is arrange the animals into pairs like so [[‘c','c'],['g','g']]
// remember that animals are case sensitive! And for everyone’s convenience
// we want the bigger animals to come before smaller animals that occupy the same place in the alphabet.
// Giraffes before gerbils! alsoo please note we only want one pair of each animal, boat space is limited
//
// Oh and one last thing, there are rumours of sneaky numbers trying to get on board.
//
// Don't let any numbers onto the boat!!

function sortLetters(array) {
  array.sort(function(a,b) {
    var nameA = a.toUpperCase();
    var nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    else if (nameA > nameB) {
      return 1;
    }
    else {
      if (a < b) {
        return -1;
      }
      else if (a > b) {
        return 1;
      }
      else {
        return 0;
      }
    }
  });
  return array;
};

function reducer(array) {
  return array.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};

function sortNestedArrays(array) {
  array.sort(function(a, b) {
    var upperA = a[0].toUpperCase();
    var upperB = b[0].toUpperCase();
    if (upperA == upperB) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    }
  });
  return array;
};

function boatLoader(animals) {
  var pairedAnimals = [];
  animals = animals.filter(function(element) {
    return typeof(element) !== 'number';
  });
  animals = sortLetters(animals);
  for (var i = 0; i < animals.length; i++) {
    var tempArray = [];
    tempArray.push(animals[i]);
    if (animals[i] == animals[i + 1]) {
      tempArray.push(animals[i + 1]);
      if (!reducer(pairedAnimals).includes(tempArray[0])) {
        pairedAnimals.push(tempArray);
      }
    }
  }
  return sortNestedArrays(pairedAnimals);
};
