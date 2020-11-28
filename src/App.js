import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import VKCyber from './panels/VKCyber';
import EventTable from "./panels/EventTable"
import EventPage from "./panels/EventPage"

const App = () => {
	const [activePanel, setActivePanel] = useState('vkcyber');
	const [fetchedUser, setUser] = useState(null);
	const [friends, setFriends] = useState([])

	let listOfFriends = []

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
			const friend_id = onlineFriends.response[0]
			
			const user = await bridge.send("VKWebAppCallAPIMethod", {"method": "users.get", "request_id": "getFriend", "params": {"user_ids": friend_id, "fields": "first_name, last_name, photo_200", "v":"5.126", "access_token":token}});
			const userFetched = await user.response[0]
			await listOfFriends.push(userFetched)
			
			
	
			setFriends(listOfFriends)
			setUser(listOfFriends[0]);
			
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		
		<View activePanel={activePanel}>
			<VKCyber id='vkcyber' go={go}/>
			<EventTable id="eventTable" go={go} friends={friends} />
			<EventPage id="eventPage" go={go}/>

		</View>
	);
}

export default App;

