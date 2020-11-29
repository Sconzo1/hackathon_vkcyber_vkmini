import React from 'react';
import {Avatar, Cell, Div, Group, Separator, SimpleCell, Subhead, Title, UsersStack} from '@vkontakte/vkui';
import redStream from '../img/redStream.svg';
import greenIcon from '../img/greenIcon.svg';
import gift from '../img/greenGift.svg';
import likeIcon from '../img/like_20.svg';
import goldStar from '../img/goldStar.svg'
import greenPlay from '../img/greenPlay.svg'
import './VKCyber.css';


const Tournament = ({tournament, onActiveTournamentChanged, go}) => {

    let img_src = null;
    for (let key in tournament.img) {
        img_src = tournament.img[key];
    }


    let photos = [greenIcon, redStream]
    // if (friends.length !== 0){
    //     for (let i = 0; i< photos.length; i++){
    //          photos.push(friends[i].photo_200)
    //      }

    //      console.log(friends)
    // }


    return (
        <Div data-to="eventPage"
             onClick={(e) => {
                 go(e);
                 onActiveTournamentChanged(tournament)
             }}>
            <div className="itemwrapper">
                <Cell
                    before={
                        <div style={{display: "grid", alignItems: "center", gridTemplateColumns: "24px 72px"}}>
                            <img src={goldStar} alt="Tier 1"/>
                            <Avatar size={64} src={img_src}>
                                {tournament.isSoon &&
                                <img style={{position: "absolute", right: "0", top: "0", marginTop: "8px"}}
                                     src={gift} alt="Gift"/>}
                                {tournament.isOnline && <img style={{
                                    position: "absolute",
                                    right: "0",
                                    bottom: "0",
                                    marginBottom: "8px",
                                    marginRight: "3px"
                                }} src={redStream} alt="LIVE"/>}</Avatar>
                        </div>}

                    asideContent={
                        <div className="stream-info-container">
                            <SimpleCell disabled before={<img src={likeIcon} alt="Like"/>}> {tournament.likers} </SimpleCell>
                            <SimpleCell disabled
                                        before={<img src={greenPlay} alt="Play"/>}> {tournament.followers}k.k </SimpleCell>
                        </div>
                    }

                    // <Title weight="semibold" >{date}</Title><Title weight="semibold" >{month}</Title></div>}
                >
                    <Title id="title" level="2" weight="regular">{tournament.name}</Title>
                    <Subhead id="subhead" weight="bold">{tournament.Subhead}</Subhead>
                </Cell>

                <Separator style={{marginTop: "16px"}}/>

                <div className="tournament-info-container">
                    <Title id="title" level="3" weight="regular">Даты:</Title>
                    <Title id="title" level="3" weight="regular">Команды:</Title>
                    <Title id="title" level="3" weight="regular">Призовые:</Title>
                    <Subhead id="subhead" weight="regular">{tournament.start} - {tournament.end}</Subhead>
                    <Subhead id="subhead" weight="regular">{tournament.teamNum}</Subhead>
                    <Subhead id="eventPage-prize-color" weight="regular">$ {tournament.prize}</Subhead>

                </div>


                <Group>
                    {tournament.isSoon &&
                    <UsersStack photos={photos.length !== 0 ? photos : []}>Иван и ещё 2 ваших друга смотрят прямой
                        эфир</UsersStack>}
                </Group>
            </div>
        </Div>
    );
}

// VKCyberGame.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };

export default Tournament;