import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Div, Avatar, Cell, Subhead, Title, UsersStack, Group, SimpleCell, Separator} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import redStream from '../img/redStream.svg';
import greenIcon from '../img/greenIcon.svg';
import gift from '../img/greenGift.svg';
import likeIcon from '../img/like_20.svg';
import goldStar from '../img/goldStar.svg'
import greenPlay from '../img/greenPlay.svg'
import './VKCyber.css';


const Tournament = ({ name, go, img, isOnline, isSoon, likers, followers, start, end, teamNum, prize}) => {

    let photos = [greenIcon, redStream]
    // if (friends.length !== 0){
    //     for (let i = 0; i< photos.length; i++){
    //          photos.push(friends[i].photo_200)
    //      }
    
    //      console.log(friends)
    // }
    

    return(
		<Div onClick={go} data-to="eventPage">
            <div className="itemwrapper">
            <Cell
                before={
                    <div style = {{display: "grid", alignItems: "center", gridTemplateColumns: "24px 72px" }}>
                        <img src={goldStar}/>
                        <Avatar size={64} src = {img}>
                            {isSoon && <img style={{position: "absolute", right: "0", top: "0", marginTop: "8px"}} src = {gift}/>}
                            {isOnline && <img style={{position: "absolute", right: "0", bottom: "0", marginBottom: "8px", marginRight: "3px"}} src = {redStream}/>}</Avatar>
                    </div>}
                
                asideContent={ 
                    <div className="stream-info-container">
                        <SimpleCell disabled before={<img src = {likeIcon}/>}> {likers} </SimpleCell>
						<SimpleCell disabled before={<img src = {greenPlay}/>}> {followers}k.k </SimpleCell>
                        </div>
                }
                        
                        // <Title weight="semibold" >{date}</Title><Title weight="semibold" >{month}</Title></div>}
                >
                <Title id="title" level="2"  weight="regular">{name}</Title>
                <Subhead id="subhead" weight="bold">TBD</Subhead>
            </Cell>

            <Separator style={{marginTop:"16px"}}/>

            <div className="tournament-info-container">
            <Title id="title" level="3"  weight="regular">Даты:</Title>
            <Title id="title" level="3"  weight="regular">Команды:</Title>
            <Title id="title" level="3"  weight="regular">Призовые:</Title>
            <Subhead id="subhead" weight="regular">{start} - {end}</Subhead>
            <Subhead id="subhead" weight="regular">{teamNum}</Subhead>
            <Subhead id="subhead" weight="regular">$ {prize}</Subhead>
            
            </div>

            
            <Group>
                {isSoon && <UsersStack photos={photos.length !== 0 ? photos : []}>Иван и ещё 2 ваших друга смотрят прямой эфир</UsersStack>} 
            </Group>
            </div>
		</Div>
);}

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