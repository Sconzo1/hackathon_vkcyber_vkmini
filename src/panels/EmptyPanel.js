import React from 'react';
import PropTypes from 'prop-types';
//import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
//import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

//import persik from '../img/persik.png';
import './Persik.css';

//const osName = platform();

const EmptyPanel = ({id}) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				<Icon24Back/>
			</PanelHeaderButton>}
		>
			Persik
		</PanelHeader>

		
		
	</Panel>
);


export default EmptyPanel;