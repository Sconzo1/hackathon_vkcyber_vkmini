import React, { useState, useRef } from 'react';
import { Panel, PanelHeaderBack, Button, PanelHeaderContent, Avatar, Card, Title, Div, Select, Slider, HorizontalScroll, Counter } from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import './VKCyber.css';

import VirtusPro from '../img/VirtusPro.png'
import hot from '../img/merch/HOT.png'


const MerchDescription = ({ id, go, info, setOrderInfo }) => {

    const select = useRef(null);
    const [merchCount, setMerchCount] = useState(1)

    return (
        <Panel id={id} className="Panel">
            <PanelHeader
                separator={false}
                left={<PanelHeaderBack onClick={() => go('shop')} />}>
                <PanelHeaderContent
                    style={{ marginLeft: '24px' }}
                    before={<Avatar size={40} src={VirtusPro} />}
                >
                    Virtus.pro
                </PanelHeaderContent>
            </PanelHeader>

            <Div>
                <Card size='m'
                    mode="shadow"
                    style={{ background: '#232323', height: 400, textAlign: 'center' }}>
                    <img src={info.picture.picture} style={{ height: '80%', width: '80%', objectFit: 'cover' }} />
                </Card>

                <Title level="1" weight="heavy" style={{ color: '#FFF', margin: 16 }}>{info.cost.cost} <img src={hot} /></Title>
                <Title level="2" weight="semibold" style={{ marginBottom: 0, marginLeft: 16, color: '#B4B4B9' }}>{info.name.name} 2020</Title>
                <Title level="2" weight="semibold" style={{ marginBottom: 16, marginLeft: 16, color: '#B4B4B9' }}>DOTA 2 Edition</Title>

                <Div>
                <HorizontalScroll>
                    <div style={{ display: 'flex' }}>
                        <Select ref={select} defaultValue='l' placeholder="Выберите размер" style={{ width: '40%' }}>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </Select>
                        <Slider
                            style={{ width: '40%' }}
                            min={0}
                            max={5}
                            step={1}
                            value={Number(merchCount)}
                            onChange={value => setMerchCount(value)}
                            top="Введите кол-во"
                        />
                        <Counter mode="primary">{merchCount}</Counter>
                    </div>
                </HorizontalScroll>
                </Div>
                <Div>
                <Button 
                    size="xl" 
                    mode="primary"
                    onClick={() => {
                        let pic = info.picture.picture
                        let name = info.name.name
                        let cost = info.cost.cost
                        setOrderInfo({picture: pic, name: name, cost: cost, size: select.current.value, count: merchCount})
                        go('buyNow')
                    }}
                >
                        Купить сейчас
                </Button>

                </Div>

            </Div>


        </Panel>
    )
};


export default MerchDescription;