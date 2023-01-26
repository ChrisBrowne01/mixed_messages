// Series of arrays to choose an answer from
const sign = ["Sun", "Moon", "Earth", "Mars", "Venus", "Jupiter", "Star", "Moon", "Square", "Triangle", "Circle", "Air", "Water", "Fire"];
const fortune = ["Amazing", "Very Lucky", "Luck", "Like a game of dice", "in your favor", "is not in your favor", "Uncertian", "Certian", "Bad", "Unlucky", "Not lookig good", "Looking fair", "Reasonable"]
const advice = ["Trust no one", "Be kind to others", "Sleep more", "Sleep less", "Wake up earlier more refershed", "Be happy", "Be wiser today", "Be alert of you surrondings", "Don't take life too seriously", "Cherish loved ones", "Do a good deed for someone", "Work hard", "Be more active", "Be more considerate to those around you"]

// Chooses a randomized answer from array and adds it to the answer variable
const returnRandAnswer = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Displays Statements with answers
console.log('Mixed Messages')
console.log('Your sign right now is: ' + returnRandAnswer(sign));
console.log('Your outlook for today is: ' + returnRandAnswer(fortune));
console.log('You should: ' + returnRandAnswer(advice));

// ASCII Art
console.log('\t  ___\n\     _  / o o \\\n    <^> \\\\___//\n     \\ \\.\'---\'.\n      \\_/|   |.\\\n         |   |\'/')

console.log('\n    Developed by: Christopher Browne at Codecademey');