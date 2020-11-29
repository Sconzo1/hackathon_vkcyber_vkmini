import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeaderButton, Tabs, TabsItem} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import TournamentList from './tournaments/TournamentList'
import TeamList from './teams/TeamList';

const EventTable = ({id, activeGame, onActiveTournamentChanged, go, friends}) => {
    const [activeTab, setActiveTab] = useState('tournaments');

    let component = null;
    switch (activeTab) {

        case 'tournaments':
            component = <TournamentList onActiveTournamentChanged={onActiveTournamentChanged}
                                        go={go} friends={friends}/>
            break;

        case 'teams':
            component = <TeamList go={go}/>
            break;

        default:
            break;
    }

    return (

        <Panel id={id}
               className="Panel">
            <PanelHeader separator={false}
                         left={<PanelHeaderButton onClick={go} data-to="vkcyber">
                             {<Icon24Back/>}
                         </PanelHeaderButton>}>
                {activeGame.name}
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
                    onClick={() => setActiveTab('teams')}
                >
                    Команды
                </TabsItem>
            </Tabs>


            {component}
        </Panel>
    );
}

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