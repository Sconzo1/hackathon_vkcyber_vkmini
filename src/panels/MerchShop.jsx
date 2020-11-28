import React, { useState } from 'react';
import { Panel, PanelHeaderButton, PanelHeaderContent, Avatar, Div, HorizontalScroll, Button } from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import "@material/react-chips/dist/chips.css";

import './VKCyber.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import VirtusPro from '../img/VirtusPro.png'
import MerchList from './MerchList';


const MerchShop = ({ id, go, setInfo }) => {

    const [activeFilter, setActiveFilter] = useState('wear')
    const [button_1, setButton_1] = useState('overlay_primary')
    const [button_2, setButton_2] = useState('overlay_secondary')

    const itemStyle = {
        marginLeft: 4,
        marginRight: 4,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 18
    };

    return (
        <Panel id={id} className="Panel">
            <PanelHeader
                separator={false}
                left={<PanelHeaderButton onClick={() => go('eventTable')} >
            {<Icon24Back/>}
        </PanelHeaderButton>}>
                <PanelHeaderContent
                    style={{ marginLeft: '24px' }}
                    before={<Avatar size={40} src={VirtusPro} />}
                >
                    Virtus.pro
                </PanelHeaderContent>
            </PanelHeader>


            <HorizontalScroll style={{ marginTop: 16, paddingBottom: 8 }}>
                <Div style={{ display: 'flex' }}>
                    <Button 
                        style={{ ...itemStyle }} 
                        mode={button_1} 
                        onClick={() => { 
                            setActiveFilter('wear')
                            setButton_1('overlay_primary')
                            setButton_2('overlay_secondary')
                            }}>
                            Одежда
                    </Button>
                    <Button 
                        style={{ ...itemStyle }} 
                        mode={button_2}
                        onClick={() => { 
                            setActiveFilter('devices')
                            setButton_1('overlay_secondary')
                            setButton_2('overlay_primary')
                            }}>
                            Техника
                    </Button>
                    <Button style={{ ...itemStyle }} mode="overlay_outline">Аксессуары</Button>
                    <Button style={{ ...itemStyle, marginRight: 16 }} mode="overlay_outline">Специальные предложения</Button>
                </Div>
            </HorizontalScroll>
            
            <MerchList activeFilter={activeFilter} style={{ marginTop: 90 }} go={go} setInfo={setInfo}/>

        </Panel>
    )
};


export default MerchShop;