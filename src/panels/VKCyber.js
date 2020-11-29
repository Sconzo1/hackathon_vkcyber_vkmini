import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './VKCyber.css';

import VKCyberGame from "./VKCyberGame"

import games from "./data/games"


const VKCyber = ({id, onActiveGameChanged, go}) => {

    return (

        <Panel id={id}
               className="Panel">
            <PanelHeader separator={false}>
                VK cyber
            </PanelHeader>

            <VKCyberGame game={games[0]} onActiveGameChanged={onActiveGameChanged} go={go}/>
            <VKCyberGame game={games[1]} onActiveGameChanged={onActiveGameChanged} go={go}/>
            <VKCyberGame game={games[2]} onActiveGameChanged={onActiveGameChanged} go={go}/>
            <VKCyberGame game={games[3]} onActiveGameChanged={onActiveGameChanged} go={go}/>
            <VKCyberGame game={games[0]} onActiveGameChanged={onActiveGameChanged} go={go}/>

        </Panel>
    );
}
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