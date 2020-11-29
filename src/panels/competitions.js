import major from '../img/major.svg';
import bucharestMajor from "../img/bucharestMajor.svg"
import ukraine from '../img/ukraine.png';

const competitions = [
    {
       id: 1,
       name: "The Kiev Major",
       sumhead: "TBD",
       gameId: 1,
       city: "г. Киев",
       countryFlag: {ukraine},
       isOnline: true,
       isSoon: true,
       img: {major},
       likers: 2394,
       followers: 1.1,
       start: "27.11",
       end: "19.12",
       teamNum: 13,
       prize: 100000
    },
    {
        id: 2,
        name: "Epic League Div 2",
        sumhead: "Круговая система",
        gameId: 1,
        city: "г. Будапешт",
        countryFlag: null,
        isOnline: false,
        isSoon: false,
        img: {bucharestMajor},
        likers: 3431,
        followers: 2.1,
        start: "01.01",
        end: "8.01",
        teamNum: 21,
        prize: 300000
    }
]

export default competitions