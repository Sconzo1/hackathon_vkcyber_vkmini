import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import VKCyber from './panels/VKCyber';
import EventTable from "./panels/EventTable"
import MerchShop from './panels/MerchShop';
import MerchDescription from './panels/MerchDescriprion';
import MerchBuyNow from './panels/MerchBuyNow';

const App = () => {
	const [activePanel, setActivePanel] = useState('shop');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [info, setInfo] = useState(null)
	const [orderInfo, setOrderInfo] = useState(null)

	useEffect(() => {

		async function fetchData() {
			const token = (await bridge.send("VKWebAppGetAuthToken", {"app_id": 7679704, "scope": "friends,status"})).access_token;
			const onlineFriends = await bridge.send("VKWebAppCallAPIMethod", {"method": "friends.getOnline", "request_id": "32test", "params": {"v":"5.126", "order": "random", "access_token":token}});
			const friend_id = onlineFriends.response[0]
			//const friend = bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "getid", "params": {"user_ids": onlineFriends.user_ids, "v":"5.126", "access_token":token}}).response;
			//alert(friend_id)
			const user = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "getFriend", "params": {"user_ids": friend_id, "fields": "first_name, last_name, photo_200", "v":"5.126", "access_token":token}});
			//const user = await bridge.send('VKWebAppGetUserInfo');
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

	return (
		// <View activePanel={activePanel} popout={popout}>
		<View activePanel={activePanel}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<VKCyber id='vkcyber' fetchedUser={fetchedUser} go={go}/>
			<EventTable id = "eventtable" go= {go}/>
			<MerchShop id='shop' go={setActivePanel} setInfo={setInfo}/>
			<MerchDescription id='merchDescription' go={setActivePanel} info={info} setOrderInfo={setOrderInfo}/>
			<MerchBuyNow id='buyNow' go={setActivePanel} orderInfo={orderInfo} fetchedUser={fetchedUser}/>
		</View>
	);
}

export default App;

