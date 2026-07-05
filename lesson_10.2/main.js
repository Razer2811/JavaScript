const listSports = [
    { name: 'Bóng đá', like: 9 },
    { name: 'Bóng rổ', like: 4 },
    { name: 'Cầu lông', like: 8 },
    { name: 'Bơi lội', like: 5 }
];


function sportInsert(sport){
    return {
        name : `Môn ${sport.name}`,
        like : sport.like
    };
}
var newSport = listSports.map(sportInsert);

console.log(newSport);