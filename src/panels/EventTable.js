import React from 'react';
import PropTypes from 'prop-types';
import {Panel, FixedLayout, Tabs, TabsItem, PanelHeaderButton} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import games from "./games"
import Tournament from "./Tournament"


const EventTable = ({ id, go, game, fetchedUser }) => (
	<Panel id={id}
        className="Panel">
        <PanelHeader separator={false}
            left={<PanelHeaderButton onClick={go} data-to="vkcyber">
            {<Icon24Back/>}
        </PanelHeaderButton>}>
            Dota 2
        </PanelHeader>

        <FixedLayout vertical="top">
            <Tabs>
              <TabsItem
                //selected={this.state.activeTab === 'groups'}
                onClick={() => this.setState({ activeTab: 'groups' })}
              >176 сообществ</TabsItem>
              <TabsItem
                //selected={this.state.activeTab === 'events'}
                onClick={() => this.setState({ activeTab: 'events' })}
              >9 событий</TabsItem>
            </Tabs>
          </FixedLayout>

		<Tournament/>

		
      

		
	</Panel>
);

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