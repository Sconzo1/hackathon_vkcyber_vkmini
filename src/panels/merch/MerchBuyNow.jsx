import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardGrid,
    Div,
    FixedLayout,
    Headline,
    Panel,
    PanelHeaderBack,
    PanelHeaderContent,
    Title
} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import '../VKCyber.css';

import VirtusPro from '../../img/VirtusPro.png'
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';


const MerchBuyNow = ({id, go, mainUser, orderInfo}) => {

    let sum = parseInt(orderInfo.cost.slice(0, -2).replace(/\s/g, ''), 10)
    sum *= parseInt(orderInfo.count, 10)

    return (
        <Panel id={id} className="Panel">
            <PanelHeader
                separator={false}
                left={<PanelHeaderBack onClick={() => go('shop')}/>}>
                <PanelHeaderContent
                    style={{marginLeft: '24px'}}
                    before={<Avatar size={40} src={VirtusPro}/>}
                >
                    Virtus.pro
                </PanelHeaderContent>
            </PanelHeader>

            <CardGrid style={{marginTop: 16, marginBottom: 32, paddingLeft: 16, paddingRight: 32}}>
                <Card
                    size='l'
                    mode="shadow"
                    style={{background: '#232323', padding: 8, color: '#B4B4B9'}}
                >
                    <Title level="2" weight="semibold" style={{marginBottom: 16, color: '#fff'}}>
                        Детали доставки
                    </Title>
                    <Headline weight="semibold" style={{marginBottom: 8}}>
                        {mainUser.first_name} {mainUser.last_name}, +79998884422</Headline>
                    <Headline weight="semibold" style={{marginBottom: 8}}>{mainUser.city.title}</Headline>
                    <Headline weight="semibold" style={{marginBottom: 8}}>{mainUser.country.title}</Headline>
                </Card>

                <Card
                    size='l'
                    mode="shadow"
                    style={{background: '#232323', padding: 8, color: '#B4B4B9'}}
                >
                    <Title level="2" weight="semibold" style={{marginBottom: 16, color: '#fff'}}>
                        Способ оплаты
                    </Title>
                    <Headline
                        weight="semibold"
                        style={{marginBottom: 8, display: 'flex'}}
                    >
                        Картой из VK Pay <Icon24LogoVk style={{marginLeft: 8, color: '#4986CC'}}/>
                    </Headline>
                </Card>

                <Card
                    size='l'
                    mode="shadow"
                    style={{background: '#232323', padding: 8, color: '#B4B4B9'}}
                >
                    <img src={orderInfo.picture} style={{float: 'left', width: '40%'}} alt="Preview"/>
                    <div style={{display: 'flex', height: 150}}>
                        <div style={{marginTop: 'auto', marginBottom: 'auto'}}>
                            <Headline weight="semibold"
                                      style={{marginBottom: 8, color: '#fff'}}>{orderInfo.name}</Headline>
                            <Headline weight="semibold" style={{
                                marginBottom: 16,
                                color: '#B4B4B9'
                            }}>Размер: {orderInfo.size.toUpperCase()}, {orderInfo.count} шт.</Headline>
                            <Title level="1" weight="semibold"
                                   style={{marginBottom: 8, color: '#fff'}}>{orderInfo.cost}</Title>
                        </div>
                    </div>
                </Card>
            </CardGrid>

            <Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button
                            size="xl"
                            mode="primary"
                        >
                            Оплатить {sum} ₽
                        </Button>
                    </Div>
                </FixedLayout>
            </Div>
        </Panel>
    )
};


export default MerchBuyNow;