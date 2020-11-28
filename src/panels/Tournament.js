import React from 'react';
import PropTypes from 'prop-types';
import {Div, Avatar, Cell, Subhead, Title} from '@vkontakte/vkui';

import redStream from '../img/redStream.svg';
import greenIcon from '../img/greenIcon.svg';
import playIcon from '../img/play_20.svg';
import Icon24GiftOutline from '@vkontakte/icons/dist/24/gift_outline';
import Icon24Play from '@vkontakte/icons/dist/24/play';
import './VKCyber.css';


const Tournament = ({ name, img, isOnline, isSoon, date, month}) => (
		<Div> 
            <div className="itemwrapper">
            <Cell
                before={
                    <div style = {{display: "grid", alignContent: "space-between", gridTemplateColumns: "72px" }}>
                        <Avatar size={64} src = {img}>
                            {isSoon && <img style={{position: "absolute", right: "0", top: "0", marginTop: "8px"}} src = {greenIcon}/>}
                    {isOnline && <img style={{position: "absolute", right: "0", bottom: "0", marginBottom: "8px"}} src = {redStream}/>}</Avatar>
                    </div>}
                asideContent={ <div><Title weight="semibold" >{date}</Title><Title weight="semibold" >{month}</Title></div>}
                >
                {name}
            </Cell>
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