import React, {useEffect, useState} from 'react';
import '../VKCyber.css';
import Tournament from "./Tournament"
import axios from "axios";

const TournamentList = ({id, onActiveTournamentChanged, go, friends}) => {

    const [toursIntro, setToursIntro] = useState([])

    useEffect(() => {
        axios.post('https://19579ebadc89.ngrok.io/bin/Dota2/index.php', {
            v: "2.0",
            method: "getTournamentIntro",
            params: {name: "The Kiev Major"}
        })
            .then(response => {
                if (response.data.result.length !== 0) {
                    setToursIntro(prevState => [...prevState, response.data.result])
                } else {
                    console.log(response.data.error.message ? response.data.error.message : "Error")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [setToursIntro])

    return (
        <div id={id}>
            {toursIntro.map((t, i) => {
                return (<Tournament key={t.tournament} tournament={t}
                                    onActiveTournamentChanged={onActiveTournamentChanged}
                                    go={go} friends={friends}/>
                )
            })}
        </div>
    )
}


export default TournamentList;