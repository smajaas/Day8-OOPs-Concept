
//Create a class called Movie

class Movie {

    //Constructor with parameters
    constructor(title,studio,rating="PG") {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    //Created get method to filter "PG"
    getPG(movies) {
        return movies.filter(movie=>movie.rating==="PG")
    }
}

//Created list of movies

let movietamil= new Movie("Jai Bhim","2D Entertainmaint","R");
let movie2=new Movie("Wild Life", "DC studios","PG");

const movieList=[movietamil,movie2];

let movieGet = new Movie(movieList);

let movie4 = new Movie("casino royale" , "Eon Productions" ,"PG13");

console.log(movie4);
console.log(movieGet.getPG(movieList));


