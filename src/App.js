import React, {useEffect, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import VKCyber from './panels/VKCyber';
import EventTable from "./panels/EventTable"
import TournamentPage from "./panels/tournaments/TournamentPage"

import MerchShop from './panels/merch/MerchShop';
import MerchDescription from './panels/merch/MerchDescriprion';
import MerchBuyNow from './panels/merch/MerchBuyNow';

const App = () => {
    const [activePanel, setActivePanel] = useState('vkcyber');
    const [mainUser, setMainUser] = useState(null);
    const [fetchedUsers, setUsers] = useState([]);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

    const [token, setToken] = useState(null)

    const [activeGame, setActiveGame] = useState(null)
    const [activeTournament, setActiveTournament] = useState(null)

    const [info, setInfo] = useState(null)
    const [orderInfo, setOrderInfo] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const ac_token = (await bridge.send("VKWebAppGetAuthToken", {
                "app_id": 7679704,
                "scope": "friends,status,wall"
            })).access_token;

            setToken(ac_token)

            const onlineFriends = await bridge.send("VKWebAppCallAPIMethod", {
                "method": "friends.getOnline",
                "request_id": "32test",
                "params": {"v": "5.126", "order": "random", "access_token": ac_token}
            });

            const mainUser1 = await bridge.send("VKWebAppGetUserInfo");
            console.log(mainUser1)
            setMainUser(mainUser1)

            const friend_ids = onlineFriends.response.slice(0, 3).join()
            const user = await bridge.send("VKWebAppCallAPIMethod", {
                "method": "users.get",
                "request_id": "getFriend",
                "params": {
                    "user_ids": friend_ids,
                    "fields": "first_name, last_name, photo_200",
                    "v": "5.126",
                    "access_token": ac_token
                }
            })

            const usersFetched = await user.response

            setUsers(usersFetched);
            setPopout(null);
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
                        go={go} friends={fetchedUsers}/>
            <TournamentPage id="eventPage" activeTournament={activeTournament} go={go} token={token}/>
            <MerchShop id='shop' go={setActivePanel} setInfo={setInfo}/>
            <MerchDescription id='merchDescription' go={setActivePanel} info={info} setOrderInfo={setOrderInfo}/>
            <MerchBuyNow id='buyNow' go={setActivePanel} orderInfo={orderInfo} mainUser={mainUser}/>
        </View>
    );
}

export default App;

