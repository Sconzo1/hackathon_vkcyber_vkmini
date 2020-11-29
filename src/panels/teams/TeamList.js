import React, {useEffect, useState} from 'react';
import '../VKCyber.css';
import Team from "./Team"
import naviImg from '../../img/NAVI.png';
import ukraineFlag from '../../img/ukraine.png'

import virtusImg from '../../img/VirtusPro.png';
import russiaFlag from '../../img/russia.png'
import axios from "axios";

const TeamList = ({id, go}) => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.post('http://hack/bin/Dota2/index.php', {v: "2.0", method: "getTeamList"})
            .then(response => {
                if (response.data.result.length !== 0) {
                    console.log(response.data.result)
                    setTeams(response.data.result)
                } else {
                    console.log(response.data.error.message ? response.data.error.message : "Error")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <div id={id}>
            {teams.map((v, i) => (
                <Team name={v.name} go={go} teamImg={i % 2 ? virtusImg : naviImg}
                      countryImg={i % 2 ? ukraineFlag : russiaFlag} stats={v.diff} isPresent={i % 2}
                      position={i + 1} key={i}/>
            ))}
        </div>
    )
}


export default TeamList;