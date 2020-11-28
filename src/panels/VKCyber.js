import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';

import VKCyberGame from "./VKCyberGame"

import games from "./games"


const VKCyber = ({ id, go, fetchedUser }) => (
	<Panel id={id}
        className="Panel">
        <PanelHeader separator={false}>
            VK cyber
        </PanelHeader>

		<VKCyberGame name={games[0].name} img={games[0].img['dota2Photo']} like={194} post={3} play={1.1} blue={10} onClick/>
		<VKCyberGame name={games[1].name} img={games[1].img['overwatchPhoto']} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={games[2].name} img={games[2].img['csgoPhoto']} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={games[3].name} img={games[3].img['lolPhoto']} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={games[0].name} img={games[0].img['dota2Photo']} like={194} post={3} play={1.1} blue={10}/>
		{/* <VKCyberGame name={"Overwatch"} img={overwatchPhoto} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={"CS:Go"} img={csgoPhoto} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={"LOL"} img={lolPhoto} like={194} post={3} play={1.1} blue={10}/>
		<VKCyberGame name={"Dota 2"} img={dota2Photo} like={194} post={3} play={1.1} blue={10}/> */}

		
      

		
	</Panel>
);

VKCyber.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default VKCyber;