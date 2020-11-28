import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import VKCyber from './panels/VKCyber';
import EventTable from "./panels/EventTable"

const App = () => {
	const [activePanel, setActivePanel] = useState('eventtable');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {
			const token = (await bridge.send("VKWebAppGetAuthToken", {"app_id": 7677320, "scope": "friends,status"})).access_token;
			
			const onlineFriends = await bridge.send("VKWebAppCallAPIMethod", {"method": "friends.getOnline", "request_id": "32test", "params": {"v":"5.126", "order": "random", "access_token":token}});
			console.log(onlineFriends)
			const friend_id = onlineFriends.response[0]
			//const friend = bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "getid", "params": {"user_ids": onlineFriends.user_ids, "v":"5.126", "access_token":token}}).response;
			//alert(friend_id)
			const user = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "getFriend", "params": {"user_ids": friend_id, "fields": "first_name, last_name, photo_200", "v":"5.126", "access_token":token}});
			//const user = await bridge.send('VKWebAppGetUserInfo');
			const userFetched = await user.response[0]
			console.log(user)
			
			setUser(userFetched);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<VKCyber id='vkcyber' fetchedUser={fetchedUser} go={go}/>
			<EventTable id = "eventtable" go= {go}/>
		</View>
	);
}

export default App;

