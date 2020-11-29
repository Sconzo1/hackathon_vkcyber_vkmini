import React from 'react';
import {Avatar, Cell, Div, SimpleCell, Title} from '@vkontakte/vkui';
import gift from '../img/greenGift.svg';
import './VKCyber.css';
import statUp from '../img/statUp.svg'
import statDown from '../img/statDown.svg'


const Team = ({id, name, go, teamImg, countryImg, stats, isPresent}) => {

    return (
        <Div id={id} onClick={go} data-to="shop">
            <div className="itemwrapper">
                <Cell
                    before={
                        <div style={{display: "grid", alignItems: "center", gridTemplateColumns: "24px 72px"}}>
                            <Title id="title" level="1" weight="regular">1.</Title>
                            <div style={{margin: "12px 0px"}}>
                                <Avatar size={64} src={teamImg}>
                                    {isPresent &&
                                    <img style={{position: "absolute", right: "0", top: "0", marginTop: "8px"}}
                                         src={gift} alt="Gift"/>}
                                </Avatar>
                            </div>
                        </div>}

                    asideContent={
                        <div>
                            {stats < 0 ? <SimpleCell disabled before={<img src={statDown} alt=""/>}> {stats} </SimpleCell> :
                                <SimpleCell disabled before={<img src={statUp} alt=""/>}> +{stats} </SimpleCell>}</div>}
                >

                    <Title id="title" level="1" weight="regular">{name} &nbsp; <img width="28px"
                                                                                    src={countryImg} alt="Country"/></Title>

                </Cell>

            </div>
        </Div>
    )
}

export default Team