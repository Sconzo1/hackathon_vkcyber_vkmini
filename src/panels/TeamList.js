import React, { useState, useEffect } from 'react';
import './VKCyber.css';
import Team from "./Team"
import naviImg from '../img/NAVI.png';
import ukraineFlag from '../img/ukraine.png'
import statUp from '../img/statUp.svg'

import virtusImg from '../img/VirtusPro.png';
import russiaFlag from '../img/russia.png'
import statDown from '../img/statDown.svg'
import bucharestMajor from "../img/bucharestMajor.svg"

const TeamList = ({id}) => (
	<div id = {id}>
        <Team name="NAVI" teamImg={naviImg} countryImg={ukraineFlag} stats={2} isPresent={false}/>
        <Team name="VirtusPro" teamImg={virtusImg} countryImg={russiaFlag} stats={-3} isPresent={true}/>
    </div>
);


export default TeamList;