import React from 'react';
import PropTypes from 'prop-types';
import { Div, Subhead, SimpleCell } from '@vkontakte/vkui';

import './VKCyber.css';

import likeIcon from '../img/like_20.svg';
import blueIcon from '../img/blue_20.svg';
import playIcon from '../img/play_20.svg';
import postIcon from '../img/post_20.svg';


const VKCyberGame = ({ game, onActiveGameChanged, go}) => {
	
	let img_src = null;
    for (let key in game.img) {
        img_src = game.img[key];
    }
	
	return(
		<Div onClick={(e) => {
							go(e);
							onActiveGameChanged (game)}} data-to="eventTable">
			<div className="gameInfo" >
				<div className="column">
					<img style={{marginTop: "8px"}} src={img_src}/>
				</div>
				
				<div>
                    <Subhead style = {{marginLeft: "20px"}} weight="semibold" >{game.name}</Subhead>
				
					<div className="column">
						<div className="grid-container">
							<SimpleCell disabled before={<img src = {likeIcon}/>}> {game.like} </SimpleCell>
							<SimpleCell disabled before={<img src = {postIcon}/>}> {game.post} </SimpleCell>
							<SimpleCell disabled before={<img src = {playIcon}/>}> {game.play}k.k </SimpleCell>
							<SimpleCell disabled before={<img src = {blueIcon}/>}> {game.blue} </SimpleCell>	
						</div>
					</div>
				</div>
			</div>
			
		</Div>
);
}

export default VKCyberGame;