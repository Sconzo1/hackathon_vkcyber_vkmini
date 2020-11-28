import React from 'react';
import PropTypes from 'prop-types';
import {Div, Avatar, Cell} from '@vkontakte/vkui';
import major from '../img/major.svg';
import Icon24GiftOutline from '@vkontakte/icons/dist/24/gift_outline';
import Icon24Play from '@vkontakte/icons/dist/24/play';
import './VKCyber.css';

const Tournament = ({ name, img, like, post, play, blue }) => (
		<Div> 
            <Cell
                before={<Avatar size={64} src = {major}/>}
                asideContent={ <div style = {{display: "flex", flexOrientation: "row"}}><Icon24GiftOutline/><Icon24Play/></div>}
                >
                The Kiev Major
            </Cell>
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