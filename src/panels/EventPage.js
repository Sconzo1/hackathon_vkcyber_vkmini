import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Panel, Div, Title, Subhead, Button, Cell, TabsItem, HorizontalScroll, PanelHeaderButton, Avatar, Separator} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import gift from '../img/greenGift.svg';
import fire from '../img/fire.svg';
import goldStar from '../img/goldStar.svg';


import NAVI from '../img/NAVI.png';
import OG from '../img/OG.png';
import EG from '../img/EG.png';
import IG from '../img/IG.png';
import Secret from '../img/Secret.png';
import Alliance from '../img/Alliance.png';
import Liquid from '../img/Liquid.png';
import VirtusPro from '../img/VirtusPro.png';
import peopleRedIcon from '../img/peopleRed.svg'
import peopleBlueIcon from '../img/peopleBlue.svg'
import share_outline_28 from '../img/share_outline_28.svg'




const EventPage = ({id, activeTournament, go}) => {
    let img_src = null;
    for (let key in activeTournament.countryFlag) {
        img_src = activeTournament.countryFlag[key];
    }

    return(
        <Panel id={id}
            className="Panel">
            <PanelHeader separator={false}
                left={<PanelHeaderButton onClick={go} data-to="eventTable">
                {<Icon24Back/>}
            </PanelHeaderButton>}>
                {activeTournament.name}<img src={gift}/>
            </PanelHeader>    

            <Div>
                <div className="itemwrapper">
                    <div className="eventPage-prize-container"> 
                        <Title level="2" id="subhead">Призовой фонд</Title>
                            <Subhead id="title">{activeTournament.start}-{activeTournament.end}</Subhead>
                            <Title id="eventPage-prize-color">{activeTournament.prize} $</Title>
                        <Subhead id="title">{activeTournament.city}&nbsp;<img src={img_src}/></Subhead>
                    </div>

                </div>
                
            </Div>   

            <Div>
                <div className="itemwrapper">
                    <HorizontalScroll>
                        <div style={{display: "flex"}}>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={NAVI} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={OG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={Alliance} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={EG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={VirtusPro} ></Avatar>
                            </div>
                            
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={Secret} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={VirtusPro} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={OG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={NAVI} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={IG} ></Avatar>
                            </div>
                            
                            
                        </div>

                    </HorizontalScroll>

                    <HorizontalScroll>
                        <div style={{display: "flex"}}>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={Secret} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={VirtusPro} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={OG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={NAVI} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={IG} ></Avatar>
                            </div>

                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={NAVI} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={OG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={Alliance} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={EG} ></Avatar>
                            </div>
                            <div style={{margin: "12px"}}>
                            <Avatar size={64} src={VirtusPro} ></Avatar>
                            </div>
                            
                        </div>

                    </HorizontalScroll>

                    <Separator/>

                </div>
                
            </Div>   

            <Div>
            <Button size="xl" mode="primary">Перейти к турнирной сетке</Button>
            </Div>


            <Div>
                <div className="itemwrapper">
                    <div id="eventPage-match-info">
                        <div id="eventPage-match-info-teams-header">
                            <img src={goldStar}/>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level = "2" weight="regular">KM</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level = "2" weight="regular">Bo5</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="eventPage-match-info-redTitle" level = "2" weight="regular">2 карта</Title>
                        </div>
                    </div>

                    <div id="eventPage-match-info-teams-body">

                            <Title id="title" weight="bold">Navi</Title>
                            <Avatar src={NAVI} size={64}> <Title id="title" level = "1" weight="bold"> 3 </Title> </Avatar>
                            <div >
                                <Title id="eventPage-match-info-redTitle" level = "2" weight="regular">LIVE</Title>
                                <Title id="eventPage-match-info-redTitle" level = "2" weight="regular"><img src={fire}/> 5</Title>
                            </div>
                            
                            <Avatar src={OG} size={64}> <Title id="title" level = "1" weight="bold"> 2 </Title> </Avatar>
                            <Title id="title" weight="bold">Evil genious</Title>
                            
                        </div>
                    <Separator/>

                    <Cell before={
                        <div style={{width: "160px", display: "flex", justifyContent: "space-evenly"}}>
                            <Avatar size={24} src={peopleRedIcon}/>
                            <Title id="title" weight="regular">120</Title>
                            <Avatar size={24} src={peopleBlueIcon}/>
                            <Title id="title" weight="regular">120</Title>
                        </div>} 
                        asideContent={
                            <div style={{margin: "0px"}}>
                                <img src = {share_outline_28}/>
                            </div>
                            
                        }>
                        
                    </Cell>
                </div>
            </Div>


            <Div>
                <div className="itemwrapper">
                    <div id="eventPage-match-info">
                        <div id="eventPage-match-info-teams-header">
                            <img src={goldStar}/>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level = "2" weight="regular">KM</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level = "2" weight="regular">Bo5</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="eventPage-match-info-redTitle" level = "2" weight="regular">через 12 мин</Title>
                        </div>
                    </div>

                    <div id="eventPage-match-info-teams-body">

                            <Title id="title" weight="bold">Navi</Title>
                            <Avatar src={NAVI} size={64}> <Title id="title" level = "1" weight="bold"> 3 </Title> </Avatar>
                            <div >
                                <Title id="eventPage-match-info-redTitle" level = "2" weight="regular">LIVE</Title>
                                {/* <Title id="eventPage-match-info-redTitle" level = "2" weight="regular"><img src={fire}/> 5</Title> */}
                            </div>
                            
                            <Avatar src={OG} size={64}> <Title id="title" level = "1" weight="bold"> 2 </Title> </Avatar>
                            <Title id="title" weight="bold">Evil genious</Title>
                            
                        </div>
                    <Separator/>

                    <Cell before={
                        <div style={{width: "160px", display: "flex", justifyContent: "space-evenly"}}>
                            <Avatar size={24} src={peopleRedIcon}/>
                            <Title id="title" weight="regular">120</Title>
                            <Avatar size={24} src={peopleBlueIcon}/>
                            <Title id="title" weight="regular">120</Title>
                        </div>} 
                        asideContent={
                            <div style={{margin: "0px"}}>
                                <img src = {share_outline_28}/>
                            </div>
                            
                        }>
                        
                    </Cell>
                </div>
            </Div>


	</Panel>
    )
}


export default EventPage