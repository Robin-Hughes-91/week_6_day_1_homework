// var sports = []
// var sports = ['football', 'tennis', 'rugby'];
// var numberOfElements = sports.length;
// console.log('number of elements:', numberOfElements);
//
// var firstSport = sports[0];
// console.log('first sport:', firstSport);
//
// var secondSport = sports[1];
// console.log('second sport:', secondSport);
//
// sports.push('curling');
// sports.push('snooker');
// sports.push('darts');
// console.log('sports:', sports);
//
// sports.pop();
// console.log('sports:', sports);
//
// var removedSport = sports.pop();
// console.log('removed sport', removedSport);
//
// sports.unshift('basketball');
// console.log('sports:', sports);
//
// var removedSport = sports.shift();
// console.log('removed sport:', removedSport);
//
// console.log('sports:', sports);

// var sports = [ 'football', 'tennis', 'rugby', 'curling', 'snooker']
//
// var removedSport = sports.splice(3, 1);
// console.log('removed sports:', removedSport);

// this uses position 3 removes nothing instead it replaces
// sports.splice(3, 0, 'swimming');
//
// console.log('sports:', sports);

// for (var currentSport of sports){
//   var UppercasedSport = currentSport.toUpperCase();
//   console.log;(UppercasedSport);
// }

// for(var i = 0; i < sports.length; i++){
//   var currentSport = sports[i];
//   var UppercasedSport = currentSport.toUpperCase();
//   console.log(UppercasedSport);
// }
// this only works increments on the second index position on each loop check
// /
// for(initialiseCounter; condition; incrementCounter){
//
// }

// var movie = {};
// console.log('movie:', movie);
// var movie = {
//   title: "It's a Wonderful Life",
//   year: 1946,
//   language: 'Hebrew'
// };

// console.log('movie:', movie);
//
// var title = movie.title;
// console.log('title:', title);
//
// movie.cast = ['James Stewart', 'Donna Reed'];
//
// console.log('movie:', movie);
//
// console.log(movie.budget = 1000);
// console.log('movie:', movie);
//
// movie.language = 'English';
// console.log('movie:', movie);
//
// movie['language'] = 'French';
// console.log('movie:', movie);
//
// movie['subtitle-language'] = 'German';
//
// console.log('movie:', movie);
//
// var propertyToAccess = 'subtitle-language';
// movie[propertyToAccess] = 'Spanish';
// console.log('movie:', movie);


// delete movie.year;
// console.log('movie:', movie);
//
//
// movie.ratings = {
//   critic: 94,
//   audience: 95
// };
//
// console.log('movie:', movie);
//
//
// var audienceRating = movie.ratings.audience
// console.log(audienceRating);
//
// for (var key in movie){
//   var value = movie[key];
//   console.log(`The ${key} is ${value}`);
// }
//
// var keys = Object.keys(movie);
// console.log('keys:', keys);
//
// for(var key in movie){
//   if(key == "ratings"){
//     for(var rKey in movie[key]){
//       console.log(`The ${rKey} is ${movie[key][rKey]}`);
//     }
//   }
//   else{
//     console.log(`The ${key} is ${movie[key]}`);
//
//   }
// }

var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];

// 1. Loop through the array of movies and make each movie's title all capital letters.

// 2. Loop through the array and find the movie with the title Citizen Kane. log its year of release.

// 3. Using a different kind of loop, iterate through the movies and log each movie's title and audience rating.

var movies = movies
console.log('movie:', movies);

for (var currentMovie of movies){
  var UppercasedMovie = currentMovie.title.toUpperCase();
  console.log(UppercasedMovie);
}

for (var currentMovie of movies){
  if(currentMovie.title == 'Citizen Kane')
  console.log(currentMovie.year);
}

for(var i = 0; i < movies.length; i++){
  var currentMovie = movies[i];
  var audienceRating = currentMovie.ratings.audience
  console.log(`${currentMovie.title}: Audience rating is ${audienceRating}`);
}
