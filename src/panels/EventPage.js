import React from 'react';
import {
    Avatar,
    Button,
    Cell,
    Div,
    HorizontalScroll,
    Panel,
    PanelHeaderButton,
    Separator,
    Subhead,
    Title
} from '@vkontakte/vkui';
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
import VirtusPro from '../img/VirtusPro.png';
import peopleRedIcon from '../img/peopleRed.svg'
import peopleBlueIcon from '../img/peopleBlue.svg'
import share_outline_28 from '../img/share_outline_28.svg'

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const EventPage = ({id, activeTournament, go}) => {
    let img_src = null;
    for (let key in activeTournament.countryFlag) {
        img_src = activeTournament.countryFlag[key];
    }

    return (
        <Panel id={id}
               className="Panel">
            <PanelHeader separator={false}
                         left={<PanelHeaderButton onClick={go} data-to="eventTable">
                             {<Icon24Back/>}
                         </PanelHeaderButton>}>
                {activeTournament.name}<img src={gift} alt="Gift"/>
            </PanelHeader>

            <Div>
                <div className="itemwrapper">
                    <div className="eventPage-prize-container">
                        <Title level="3" id="subhead">Призовой фонд</Title>
                        <Subhead id="title">{activeTournament.start}-{activeTournament.end}</Subhead>
                        <Title id="eventPage-prize-color">{numberWithSpaces(activeTournament.prize)} $</Title>
                        <Subhead id="title">{activeTournament.city}&nbsp;{img_src !== null ? <img src={img_src} alt="Img"/>: null}</Subhead>
                    </div>

                </div>

            </Div>

            <Div>
                <div className="itemwrapper">
                    <HorizontalScroll>
                        <div style={{display: "flex"}}>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={NAVI}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={OG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={Alliance}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={EG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={VirtusPro}/>
                            </div>

                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={Secret}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={VirtusPro}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={OG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={NAVI}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={IG}/>
                            </div>


                        </div>

                    </HorizontalScroll>

                    <HorizontalScroll>
                        <div style={{display: "flex"}}>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={Secret}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={VirtusPro}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={OG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={NAVI}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={IG}/>
                            </div>

                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={NAVI}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={OG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={Alliance}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={EG}/>
                            </div>
                            <div style={{margin: "12px"}}>
                                <Avatar size={64} src={VirtusPro}/>
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
                            <img src={goldStar} alt="Tier 1"/>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level="2" weight="regular">KM</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level="2" weight="regular">Bo5</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="eventPage-match-info-redTitle" level="2" weight="regular">2 карта</Title>
                        </div>
                    </div>

                    <div id="eventPage-match-info-teams-body">

                        <Title id="title" weight="bold">Navi</Title>
                        <Avatar src={NAVI} size={64}> <Title id="title" level="1" weight="bold"> 3 </Title> </Avatar>
                        <div>
                            <Title id="eventPage-match-info-redTitle" level="2" weight="regular">LIVE</Title>
                            <Title id="eventPage-match-info-redTitle" level="2" weight="regular"><img
                                src={fire} alt="Fire"/> 5</Title>
                        </div>

                        <Avatar src={OG} size={64}> <Title id="title" level="1" weight="bold"> 2 </Title> </Avatar>
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
                                  <img src={share_outline_28} alt="Share"/>
                              </div>

                          }>

                    </Cell>
                </div>
            </Div>


            <Div>
                <div className="itemwrapper">
                    <div id="eventPage-match-info">
                        <div id="eventPage-match-info-teams-header">
                            <img src={goldStar} alt="Tier 1"/>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level="2" weight="regular">KM</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="title" level="2" weight="regular">Bo5</Title>
                            <Title id="title" weight="bold">&#183;</Title>
                            <Title id="eventPage-match-info-redTitle" level="2" weight="regular">через 12 мин</Title>
                        </div>
                    </div>

                    <div id="eventPage-match-info-teams-body">

                        <Title id="title" weight="bold">Navi</Title>
                        <Avatar src={NAVI} size={64}> <Title id="title" level="1" weight="bold"> 3 </Title> </Avatar>
                        <div>
                            <Title id="eventPage-match-info-redTitle" level="2" weight="regular">LIVE</Title>
                            {/* <Title id="eventPage-match-info-redTitle" level = "2" weight="regular"><img src={fire}/> 5</Title> */}
                        </div>

                        <Avatar src={OG} size={64}> <Title id="title" level="1" weight="bold"> 2 </Title> </Avatar>
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
                                  <img src={share_outline_28} alt="Share"/>
                              </div>

                          }>

                    </Cell>
                </div>
            </Div>


        </Panel>
    )
}


export default EventPage