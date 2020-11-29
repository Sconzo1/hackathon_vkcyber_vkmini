import React, {useState, useEffect} from 'react';
import {Div, Avatar, Cell, Subhead, Title, UsersStack, Group, SimpleCell, Separator} from '@vkontakte/vkui';
import gift from '../img/greenGift.svg';
import './VKCyber.css';
import statUp from '../img/statUp.svg'
import statDown from '../img/statDown.svg'


const Team = ({id, name, go, teamImg, countryImg, stats, isPresent}) => {

    return(
    <Div id = {id} onClick={go} data-to="shop">
        <div className="itemwrapper">
        <Cell
            before={
                <div style = {{display: "grid", alignItems: "center", gridTemplateColumns: "24px 72px" }}>
                    <Title id="title" level="1" weight="regular">1.</Title>
                    <div style={{margin: "12px 0px" }}>
                    <Avatar size={64} src = {teamImg}>
                        {isPresent && <img style={{position: "absolute", right: "0", top: "0", marginTop: "8px"}} src = {gift}/>}
                    </Avatar>
                </div>
            </div>}
                
            asideContent={ 
                <div>
                    {stats<0 ? <SimpleCell disabled before={<img src = {statDown}/>}> {stats} </SimpleCell>: <SimpleCell disabled before={<img src = {statUp}/>}> +{stats} </SimpleCell>}</div>}    
                >

                    <Title id="title" level="1"  weight="regular">{name} &nbsp; <img width="28px" src={countryImg}/></Title>
               
                </Cell>

        </div>
    </Div>
    )
}

export default Team