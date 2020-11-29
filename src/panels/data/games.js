import dota2Photo from '../../img/Dota2.png';
import overwatchPhoto from '../../img/Overwatch.png';
import csgoPhoto from '../../img/CSGO.png';
import lolPhoto from '../../img/LOL.png';

const games = [
    {
        id: 1,
        name: "Dota 2",
        img: {dota2Photo},
        like: 194,
        post: 3,
        play: 1.1,
        blue: 10

    },
    {
        id: 2,
        name: "Overwatch",
        img: {overwatchPhoto},
        like: 113,
        post: 3,
        play: 2.5,
        blue: 6
    },
    {
        id: 3,
        name: "CS:GO",
        img: {csgoPhoto},
        like: 330,
        post: 7,
        play: 0.1,
        blue: 11
    },
    {
        id: 4,
        name: "LOL",
        img: {lolPhoto},
        like: 94,
        post: 33,
        play: 4.4,
        blue: 17
    }

]

export default games