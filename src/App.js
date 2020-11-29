import React, {useEffect, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import VKCyber from './panels/VKCyber';
import EventTable from "./panels/EventTable"
import EventPage from "./panels/EventPage"

import MerchShop from './panels/merch/MerchShop';
import MerchDescription from './panels/merch/MerchDescriprion';
import MerchBuyNow from './panels/merch/MerchBuyNow';

const App = () => {
    const [activePanel, setActivePanel] = useState('vkcyber');
    const [fetchedUser, setUser] = useState(null);
    //const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

    const [activeGame, setActiveGame] = useState(null)
    const [activeTournament, setActiveTournament] = useState(null)

    const [popout, setPopout] = useState(null);
    const [info, setInfo] = useState(null)
    const [orderInfo, setOrderInfo] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const token = (await bridge.send("VKWebAppGetAuthToken", {
                "app_id": 7679704,
                "scope": "friends,status"
            })).access_token;
            const onlineFriends = await bridge.send("VKWebAppCallAPIMethod", {
                "method": "friends.getOnline",
                "request_id": "32test",
                "params": {"v": "5.126", "order": "random", "access_token": token}
            });
            const friend_id = onlineFriends.response[0]

            const user = await bridge.send("VKWebAppCallAPIMethod", {
                "method": "users.get",
                "request_id": "getFriend",
                "params": {
                    "user_ids": friend_id,
                    "fields": "first_name, last_name, photo_200",
                    "v": "5.126",
                    "access_token": token
                }
            });
            const userFetched = await user.response[0]
            console.log(userFetched)

            setUser(userFetched);
            // setPopout(null);
        }

        fetchData();
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    function onActiveGameChanged(g) {
        setActiveGame(g)
    }

    function onActiveTournamentChanged(t) {
        setActiveTournament(t)
    }

    return (
        <View activePanel={activePanel} popout={popout}>
            <VKCyber id='vkcyber' onActiveGameChanged={onActiveGameChanged} go={go}/>
            <EventTable id="eventTable" activeGame={activeGame} onActiveTournamentChanged={onActiveTournamentChanged}
                        go={go}/>
            <EventPage id="eventPage" activeTournament={activeTournament} go={go}/>
            <MerchShop id='shop' go={setActivePanel} setInfo={setInfo}/>
            <MerchDescription id='merchDescription' go={setActivePanel} info={info} setOrderInfo={setOrderInfo}/>
            <MerchBuyNow id='buyNow' go={setActivePanel} orderInfo={orderInfo} fetchedUser={fetchedUser}/>
        </View>
    );
}

export default App;

