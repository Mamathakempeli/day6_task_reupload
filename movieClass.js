//1.The class Movie is stated below. An instance of class Movie represents a film.
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
// and a String representing the rating as its arguments,  and sets the respective class properties to these values.

class Movie {
    // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
    // You may assume the input array is full of Movie instances. The returned array need not be full.
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movieArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4"),
];

console.log(Movie.getPG(movieArray));

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const casinoRoyale = new Movie;
casinoRoyale.title = "Casino Royale";
casinoRoyale.studio =  "Eon Productions";
casinoRoyale.rating = "PG-13";

console.log(casinoRoyale);