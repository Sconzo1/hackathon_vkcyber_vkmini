import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Div,
    HorizontalScroll,
    Panel,
    PanelHeaderButton,
    Separator,
    Subhead,
    Title
} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import '../VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import gift from '../../img/greenGift.svg';

import NAVI from '../../img/NAVI.png';
import OG from '../../img/OG.png';
import EG from '../../img/EG.png';
import IG from '../../img/IG.png';
import Secret from '../../img/Secret.png';
import Alliance from '../../img/Alliance.png';
import VirtusPro from '../../img/VirtusPro.png';
import axios from "axios";
import MatchCard from "./MatchCard";

function numberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const TournamentPage = ({id, activeTournament, go, token}) => {

    const [tour, setTour] = useState({})
    const [matches, setMatches] = useState([])
    let img_src = null;

    useEffect(() => {
        axios.post('https://19579ebadc89.ngrok.io/bin/Dota2/index.php', {
            v: "2.0",
            method: "getTournamentInfo",
            params: {name: activeTournament.tournament}
        })
            .then(response => {
                if (response.data.result.length !== 0) {
                    setTour(response.data.result)
                } else {
                    console.log(response.data.error.message ? response.data.error.message : "Error")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.post('https://19579ebadc89.ngrok.io/bin/Dota2/index.php', {
            v: "2.0",
            method: "getMatchesInfo",
            params: {name: tour.tournament}
        })
            .then(response => {
                if (response.data.result.length !== 0) {
                    setMatches(response.data.result)
                } else {
                    console.log(response.data.error.message ? response.data.error.message : "Error")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [tour])

    return (
        <Panel id={id}
               className="Panel">
            <PanelHeader separator={false}
                         left={<PanelHeaderButton onClick={go} data-to="eventTable">
                             {<Icon24Back/>}
                         </PanelHeaderButton>}>
                {tour.tournament}<img src={gift} alt="Gift"/>
            </PanelHeader>

            <Div>
                <div className="itemwrapper">
                    <div className="eventPage-prize-container">
                        <Title level="3" id="subhead">Призовой фонд</Title>
                        <Subhead id="title">{tour.start}-{tour.end}</Subhead>
                        <Title id="eventPage-prize-color">$ {tour.fund ? numberWithSpaces(tour.fund) : ""}</Title>
                        <Subhead id="title">{tour.city}&nbsp;{img_src !== null ?
                            <img src={img_src} alt="Img"/> : null}</Subhead>
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

            {matches.map(v => (
                <MatchCard key={v.id} match={v} token={token}/>
            ))}
        </Panel>
    )
}


export default TournamentPage