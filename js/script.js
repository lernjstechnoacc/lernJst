"use strict";
console.log('1');

let numberOfFilms = prompt("how much film you look", "");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
let lastFilm = prompt('What is last film yo watch', '');
let ratingFilm = prompt('Give your reting for this film', '');
personalMovieDB.movies[lastFilm] = ratingFilm;
let lastFilm1 = prompt('What is last film yo watch', '');
let ratingFilm1 = prompt('Give your reting for this film', '');
personalMovieDB.movies[lastFilm1] = ratingFilm1;
