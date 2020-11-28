import React from 'react';
import PropTypes from 'prop-types';
import {Div, Subhead, SimpleCell, Avatar, Cell, PanelHeaderButton} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import './VKCyber.css';

import likeIcon from '../img/like_20.svg';
import blueIcon from '../img/blue_20.svg';
import playIcon from '../img/play_20.svg';
import postIcon from '../img/post_20.svg';


const Tournament = ({ name, img, like, post, play, blue }) => (
		<Div>
			<div className="gameInfo">
				<div className="column">
                <Cell
                  before={<Avatar size={72} src = {blueIcon}/>}
                  size="l"
                  description="Друзья в Facebook"
                  asideContent={ <React.Fragment>
                    <PanelHeaderButton ><Icon24Back/></PanelHeaderButton>
                    <PanelHeaderButton ><Icon24Back/></PanelHeaderButton>
                  </React.Fragment>}
                  
                >
                  The Kiev Major</Cell>
				</div>
				
				{/* <div>
                    <Subhead style = {{marginLeft: "20px"}} weight="semibold" >{name}</Subhead>
				
					<div className="column">
						<div className="grid-container">
							<SimpleCell disabled before={<img src = {likeIcon}/>}> {like} </SimpleCell>
							<SimpleCell disabled before={<img src = {postIcon}/>}> {post} </SimpleCell>
							<SimpleCell disabled before={<img src = {playIcon}/>}> {play}k.k </SimpleCell>
							<SimpleCell disabled before={<img src = {blueIcon}/>}> {blue} </SimpleCell>	
						</div>
					</div>
				</div> */}
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

export default Tournament;