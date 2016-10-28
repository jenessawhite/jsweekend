//Question 1: Scaling random numbers

// write a function randomInRange(a,b)
// that returns a random number between a and b inclusive
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a, b) {
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    return Math.random() * (max - min) + min;
}

var x = randomInRange(5, 100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25, 30)
console.assert(y >= -25 && y <= 30)


//Question 2: Letter Counting

// Write a function letterCount() that takes a
// string and returns an object with the count
// of each letter that is in the string.
//
// An example:
//
// letterCount("hello world")
//
// --> {
//      h: 1,
//      e: 1,
//      l: 3,
//      o: 2,
//      w: 1,
//      r: 1,
//      d: 1
// }
//
// Note that the space is not counted. All
// letters should also be converted to lower
// case when counting them.

// function letterCount(str) {
//   if (typeof str === 'undefined') {
//     return {};
//   } else {
//     var counts = {};
//     for (var i = 0; i < str.length; i++) {
//         var currentLetter = str[i];
//         if (counts [currentLetter]) { //if seen before
//             counts [currentLetter] = counts [currentLetter] + 1;
//         } else { //seen for first time
//             counts [currentLetter] = 1;
//         }
//       }
//     }
//     return counts;
// }
//
// console.log(letterCount("jaksdhfjafdsjkhjwae"));
//
//     console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
//     console.assert(letterCount().z === undefined)
//


//Question 3: Sorting Blacklisted Mackerel


// Use JavaScript's string and array functions to write out a function that returns
// an array with only tube stations that don't contain any letters from the word "mackerel":

var searchTerm = "mackerel";
var stations = [
 "Baker Street",
 "Charing Cross",
 "Edgware Road (Bakerloo)",
 "Elephant and Castle",
 "Embankment",
 "Harlesden",
 "Harrow and Wealdstone",
 "Kensal Green",
 "Kenton",
 "Kilburn Park",
 "Lambeth North",
 "Maida Vale",
 "Marylebone",
 "North Wembley",
 "Oxford Circus",
 "Paddington",
 "Piccadilly Circus",
 "Queen's Park",
 "Regent's Park",
 "South Kenton",
 "Stonebridge Park",
 "Warwick Avenue",
 "Waterloo",
 "Wembley Central",
 "Willesden Junction",
 "Bank",
 "Barkingside",
 "Bethnal Green",
 "Bond Street",
 "Buckhurst Hill",
 "Chancery Lane",
 "Chigwell",
 "Debden",
 "Ealing Broadway",
 "East Acton",
 "Epping",
 "Fairlop",
 "Gants Hill",
 "Grange Hill",
 "Greenford",
 "Hainault",
 "Hanger Lane",
 "Holborn",
 "Holland Park",
 "Lancaster Gate",
 "Leyton",
 "Leytonstone",
 "Liverpool Street",
 "Loughton",
 "Marble Arch",
 "Mile End",
 "Newbury Park",
 "North Acton",
 "Northolt",
 "Notting Hill Gate",
 "Perivale",
 "Queensway",
 "Redbridge",
 "Roding Valley",
 "Ruislip Gardens",
 "Shepherd's Bush",
 "Snaresbrook",
 "South Ruislip",
 "South Woodford",
 "St Paul's",
 "Stratford",
 "Theydon Bois",
 "Tottenham Court Road",
 "Wanstead",
 "West Acton",
 "West Ruislip",
 "White City",
 "Woodford",
 "Acton Town",
 "Aldgate East",
 "Barking",
 "Barons Court",
 "Becontree",
 "Blackfriars",
 "Bow Road",
 "Bromley-by-Bow",
 "Cannon Street",
 "Chiswick Park",
 "Dagenham East",
 "Dagenham Heathway",
 "Ealing Common",
 "Earl's Court",
 "East Ham",
 "East Putney",
 "Edgware Road (H & C)",
 "Elm Park",
 "Fulham Broadway",
 "Gloucester Road",
 "Gunnersbury",
 "Hammersmith (District and Picc)",
 "High Street Kensington",
 "Hornchurch",
 "Kensington (Olympia)",
 "Kew Gardens",
 "Mansion House",
 "Monument",
 "Parsons Green",
 "Plaistow",
 "Putney Bridge",
 "Ravenscourt Park",
 "Richmond",
 "Sloane Square",
 "South Kensington",
 "Southfields",
 "St. James's Park",
 "Stamford Brook",
 "Stepney Green",
 "Temple",
 "Tower Hill",
 "Turnham Green",
 "Upminster",
 "Upminster Bridge",
 "Upney",
 "Upton Park",
 "Victoria",
 "West Brompton",
 "West Ham",
 "West Kensington",
 "Westminster",
 "Whitechapel",
 "Wimbledon",
 "Wimbledon Park",
 "Aldgate",
 "Barbican",
 "Euston Square",
 "Farringdon",
 "Great Portland Street",
 "Hammersmith",
 "King's Cross St Pancras",
 "Moorgate",
 "Bermondsey",
 "Canada Water",
 "Canary Wharf",
 "Canning Town",
 "Canons Park",
 "Dollis Hill",
 "Finchley Road",
 "Green Park",
 "Kilburn",
 "Kingsbury",
 "London Bridge",
 "Neasden",
 "North Greenwich",
 "Queensbury",
 "Southwark",
 "St John's Wood",
 "Stanmore",
 "Swiss Cottage",
 "Wembley Park",
 "West Hampstead",
 "Willesden Green",
 "Amersham",
 "Chalfont and Latimer",
 "Chorleywood",
 "Colliers Wood",
 "Croxley",
 "Eastcote",
 "Harrow on the Hill",
 "Hillingdon",
 "Ickenham",
 "Moor Park",
 "North Harrow",
 "Northwick Park",
 "Northwood",
 "Northwood Hills",
 "Pinner",
 "Rayners Lane",
 "Rickmansworth",
 "Ruislip",
 "Ruislip Manor",
 "Uxbridge",
 "Watford",
 "West Harrow",
 "Angel",
 "Archway",
 "Balham",
 "Belsize Park",
 "Borough",
 "Brent Cross",
 "Burnt Oak",
 "Camden Town",
 "Chalk Farm",
 "Clapham Common",
 "Clapham North",
 "Clapham South",
 "Colindale",
 "East Finchley",
 "Edgware",
 "Euston",
 "Finchley Central",
 "Golders Green",
 "Goodge Street",
 "Hampstead",
 "Hendon Central",
 "High Barnet",
 "Highgate",
 "Kennington",
 "Kentish Town",
 "Leicester Square",
 "Mill Hill East",
 "Morden",
 "Mornington Crescent",
 "Old Street",
 "Oval",
 "South Wimbledon",
 "Stockwell",
 "Tooting Bec",
 "Tooting Broadway",
 "Totteridge and Whetstone",
 "Tufnell Park",
 "Warren Street",
 "West Finchley",
 "Woodside Park",
 "Alperton",
 "Arnos Grove",
 "Arsenal",
 "Boston Manor",
 "Bounds Green",
 "Caledonian Road",
 "Cockfosters",
 "Covent Garden",
 "Finsbury Park",
 "Hatton Cross",
 "Heathrow Terminal 4",
 "Heathrow Terminal 5",
 "Heathrow Terminals 123",
 "Holloway Road",
 "Hounslow Central",
 "Hounslow East",
 "Hounslow West",
 "Hyde Park Corner",
 "Knightsbridge",
 "Manor House",
 "North Ealing",
 "Northfields",
 "Oakwood",
 "Osterley",
 "Park Royal",
 "Russell Square",
 "South Ealing",
 "South Harrow",
 "Southgate",
 "Sudbury Hill",
 "Sudbury Town",
 "Turnpike Lane",
 "Wood Green",
 "Blackhorse Road",
 "Brixton",
 "Highbury and Islington",
 "Pimlico",
 "Seven Sisters",
 "Tottenham Hale",
 "Vauxhall",
 "Walthamstow Central"
];

function stationFilter(letter, word) {
  var newStations = [];
  for (var i = 0; i < word.length; i++) {
    var wordPasses = true;
    for (var j = 0; j < letter.length; j++) {
              var blacklistedLetter = letter[j].toUpperCase();
              if (word[i].toUpperCase().match(blacklistedLetter)) {
                  wordPasses = false;
              }
          }
          if (wordPasses === true) {
              newStations.push(word[i]);
          }
      }
      return newStations;
  }




stationFilter(searchTerm, stations);


//Question 4: String Reversal

// Write a function that takes a string as input,
// and returns a copy of that string reversed.
//
// remember that:
// - you can get and set characters in a string at
//   specific indices
//
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a
//   String.reverse() method)
// - use something other than
//
//      "abc".split('').reverse().join('') --> "cba"

function reverse(){

}

console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')



//Question 5: String, Array, Object

// write a method names()
// which takes a string of
// comma-separated names
// (first and last) and then
// returns an object where each
// firstname is a key, and each
// lastname is a value
//
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }
//
// function names(str) {
//
// }
//
// var results = names("George Washington, John Adams, Kanye West")
// console.assert(results.George === "Washington")
// console.assert(results['John'] === "Adams")
// console.assert(results['Kanye'] === "West")
