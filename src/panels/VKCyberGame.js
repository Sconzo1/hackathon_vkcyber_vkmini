import React from 'react';
import PropTypes from 'prop-types';
import {Div, Subhead, SimpleCell} from '@vkontakte/vkui';

import './VKCyber.css';

import likeIcon from '../img/like_20.svg';
import blueIcon from '../img/blue_20.svg';
import playIcon from '../img/play_20.svg';
import postIcon from '../img/post_20.svg';


const VKCyberGame = ({ name, img, like, post, play, blue }) => (
		<Div>
			<div className="gameInfo">
				<div className="column">
					<img style={{marginTop: "8px"}} src={img}/>
				</div>
				
				<div>
                    <Subhead style = {{marginLeft: "20px"}} weight="semibold" >{name}</Subhead>
				
					<div className="column">
						<div className="grid-container">
							<SimpleCell disabled before={<img src = {likeIcon}/>}> {like} </SimpleCell>
							<SimpleCell disabled before={<img src = {postIcon}/>}> {post} </SimpleCell>
							<SimpleCell disabled before={<img src = {playIcon}/>}> {play}k.k </SimpleCell>
							<SimpleCell disabled before={<img src = {blueIcon}/>}> {blue} </SimpleCell>	
						</div>
					</div>
				</div>
			</div>
			
		</Div>
);

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

export default VKCyberGame;