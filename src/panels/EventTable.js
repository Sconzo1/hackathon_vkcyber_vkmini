import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Panel, Tabs, TabsItem, PanelHeaderButton} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import TournamentList from './TournamentList'
import TeamList from './TeamList';


const EventTable = ({ id, go }) =>{
    const [activeTab, setActiveTab] = useState('tournaments');

    let component = null;
        switch(activeTab) {
            
            case 'tournaments':
                component = <TournamentList go= {go} />
                break;
            
            case 'teams':
                component = <TeamList />
                break;
            }

    return(

	<Panel id={id}
        className="Panel">
        <PanelHeader separator={false}
            left={<PanelHeaderButton onClick={go} data-to="vkcyber">
            {<Icon24Back/>}
        </PanelHeaderButton>}>
            Dota 2
        </PanelHeader>       
            <Tabs>
              <TabsItem
                selected={activeTab === 'tournaments'}
                onClick={() => setActiveTab('tournaments')}
                >
                    Турниры
                </TabsItem>
              
              <TabsItem
                selected={activeTab === 'teams'}
                onClick={() => setActiveTab('teams' )}
                >
                    Команды
                </TabsItem>
            </Tabs>
          

          {component}
	</Panel>
);}

EventTable.propTypes = {
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

export default EventTable;