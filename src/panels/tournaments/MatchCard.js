import React from 'react';
import {Avatar, Cell, Div, Separator, Title} from '@vkontakte/vkui';
import '../VKCyber.css';
import fire from '../../img/fire.svg';
import goldStar from '../../img/goldStar.svg';

import NAVI from '../../img/NAVI.png';
import OG from '../../img/OG.png';
import peopleRedIcon from '../../img/peopleRed.svg'
import peopleBlueIcon from '../../img/peopleBlue.svg'
import share_outline_28 from '../../img/share_outline_28.svg'
import bridge from "@vkontakte/vk-bridge";

const MatchCard = ({match, token}) => {

    const {id, score1, score2, format, ladder, state, team1, team2} = match

    function handleClickShare(e) {
        e.preventDefault()

        async function post() {
            const postWall1 = await bridge.send("VKWebAppShowWallPostBox",
                {"message": "Следишь за киберспортом? Открой для себя новый уровень комфорта!"});

            console.log(postWall1)
        }

        post()
    }

    return (
        <Div>
            <div className="itemwrapper">
                <div id="eventPage-match-info">
                    <div id="eventPage-match-info-teams-header">
                        <img src={goldStar} alt="Tier 1"/>
                        <Title id="title" weight="bold">&#183;</Title>
                        <Title id="title" level="2" weight="regular">KM</Title>
                        <Title id="title" weight="bold">&#183;</Title>
                        <Title id="title" level="2" weight="regular">{format}</Title>
                        <Title id="title" weight="bold">&#183;</Title>
                        <Title id="eventPage-match-info-redTitle" level="2"
                               weight="regular">{id % 2 ? "2 карта" : "через 12 минут"}</Title>
                    </div>
                </div>

                <div id="eventPage-match-info-teams-body">

                    <Title id="title" weight="bold">{team1}</Title>
                    <Avatar src={NAVI} size={64}> <Title id="title" level="1" weight="bold"
                                                         style={{textShadow: "1px 1px 2px black"}}> {score1} </Title>
                    </Avatar>
                    <div>
                        <Title id="eventPage-match-info-redTitle" level="2" weight="regular">LIVE</Title>
                        <Title id="eventPage-match-info-redTitle" level="2" weight="regular"><img
                            src={fire} alt="Fire"/> 5</Title>
                    </div>

                    <Avatar src={OG} size={64}> <Title id="title" level="1" weight="bold"
                                                       style={{textShadow: "1px 1px 2px black"}}> {score2} </Title>
                    </Avatar>
                    <Title id="title" weight="bold">{team2}</Title>

                </div>
                <Separator/>

                <Cell before={
                    <div style={{width: "160px", display: "flex", justifyContent: "space-evenly"}}>
                        <Avatar size={24} src={peopleRedIcon}/>
                        <Title id="title" weight="regular">{id % 2 ? "148" : "120"}</Title>
                        <Avatar size={24} src={peopleBlueIcon}/>
                        <Title id="title" weight="regular">{id % 2 ? "132" : "111"}</Title>
                    </div>}
                      asideContent={
                          <div style={{margin: "0px"}}>
                              <img src={share_outline_28} alt="Share" onClick={handleClickShare}/>
                          </div>

                      }>

                </Cell>
            </div>
        </Div>
    )
}


export default MatchCard