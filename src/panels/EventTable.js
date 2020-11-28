import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Panel, FixedLayout, Tabs, TabsItem, PanelHeaderButton} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import games from "./games"
import Tournament from "./Tournament"
import major from '../img/major.svg';
import bucharestMajor from "../img/bucharestMajor.svg"



const EventTable = ({ id, go, game, fetchedUser }) =>{
    const [activeTab, setActiveTab] = useState('tournaments');

    let component = null;
        switch(activeTab) {
            case 'tournaments':
                component = <div>
                    <Tournament name="The Kiev Major" img={major} isOnline={true} isSoon={true} date="02" month="08"/>
                    <Tournament name="The Bucharest Major" img={bucharestMajor} isOnline={false} isSoon={false} date="14" month="11"/>
                </div>
                
                break;
            case 'teams':
                component = <div>

                </div>
                break;
            default:
                component = <div>
                <Tournament name="The Kiev Major" img={major} isOnline={true} isSoon={true} date="02" month="08"/>
                <Tournament name="The Bucharest Major" img={bucharestMajor} isOnline={false} isSoon={false} date="14" month="11"/>
            </div>
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

        <FixedLayout vertical="bottom">
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
          </FixedLayout>

          {component}

		{/* <Tournament name="The Kiev Major" img={major} isOnline={true} isSoon={true} date="02" month="08"/>
        <Tournament name="The Bucharest Major" img={bucharestMajor} isOnline={false} isSoon={false} date="14" month="11"/> */}
		
      

		
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