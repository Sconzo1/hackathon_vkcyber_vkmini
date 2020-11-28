import React, { useState, useEffect } from 'react';
import './VKCyber.css';
import Tournament from "./Tournament"
import major from '../img/major.svg';
import bucharestMajor from "../img/bucharestMajor.svg"

const TournamentList = ({id, go}) => (
	<div id = {id}>
        <Tournament name="The Kiev Major" go= {go} img={major} isOnline={true} isSoon={true} likers={2394} followers={1.1} start="27.11" end = "19.12" teamNum= {13} prize={100000}/>
        <Tournament name="The Bucharest Major" go= {go} img={bucharestMajor} isOnline={false} likers={2401} followers={1.9} isSoon={false} start="01.01" end = "8.01" teamNum= {18} prize={300000}/>
    </div>
);


export default TournamentList;