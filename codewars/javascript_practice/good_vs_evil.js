/*Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits - 1
Men - 2
Elves - 3
Dwarves - 3
Eagles - 4
Wizards - 10
On the side of evil we have:

Orcs - 1
Men - 2
Wargs - 2
Goblins - 2
Uruk Hai - 3
Trolls - 5
Wizards - 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:

The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:

Return ""Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.*/



function determineWinner(goodTotal, evilTotal) {
  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  }
  else if (evilTotal > goodTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  else {
    return "Battle Result: No victor on this battle field";
  }
}

function goodMultiplier(index, element) {
  if (index === 1) {
    return element * 2;
  }
  else if (index === 2 || index === 3) {
    return element * 3;
  }
  else if (index === 4) {
    return element * 4;
  }
  else if (index === 5) {
    return element * 10;
  }
  else {
    return element;
  }
}

function badMultiplier(index, element) {
  if (index === 1 || index === 2 || index === 3) {
    return element * 2;
  }
  else if (index === 4) {
    return element * 3;
  }
  else if (index === 5) {
    return element * 5;
  }
  else if (index === 6) {
    return element * 10;
  }
  else {
    return element;
  }
}

function goodVsEvil(good, evil) {
  var goodArr = good.split(' ');
  var badArr = evil.split(' ');
  var goodTotal = 0;
  var badTotal = 0;
  for (var i = 0; i < goodArr.length; i++) {
    goodTotal += goodMultiplier(i, parseInt(goodArr[i]));
    console.log
  }
  for (var j = 0; j < badArr.length; j++) {
    badTotal += badMultiplier(j, parseInt(badArr[j]));
  }

  return determineWinner(goodTotal, badTotal);
}
