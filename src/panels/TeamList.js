import React from 'react';
import './VKCyber.css';
import Team from "./Team"
import naviImg from '../img/NAVI.png';
import ukraineFlag from '../img/ukraine.png'

import virtusImg from '../img/VirtusPro.png';
import russiaFlag from '../img/russia.png'

const TeamList = ({id, go}) => (
    <div id={id}>
        <Team name="NAVI" go={go} teamImg={naviImg} countryImg={ukraineFlag} stats={2} isPresent={false}/>
        <Team name="VirtusPro" go={go} teamImg={virtusImg} countryImg={russiaFlag} stats={-3} isPresent={true}/>
    </div>
);


export default TeamList;