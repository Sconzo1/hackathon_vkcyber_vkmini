import React, {useRef, useState} from 'react';
import {Avatar, Button, Card, Div, Panel, PanelHeaderBack, PanelHeaderContent, Select, Title} from '@vkontakte/vkui';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import '../VKCyber.css';

import VirtusPro from '../../img/VirtusPro.png'
import hot from '../../img/merch/HOT.png'
import {Grid, Typography} from "@material-ui/core";


const MerchDescription = ({id, go, info, setOrderInfo}) => {

    const select = useRef(null);
    const [merchCount, setMerchCount] = useState(1)

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

            <Div>
                <Card size='m'
                      mode="shadow"
                      style={{background: '#232323', height: 400, textAlign: 'center'}}>
                    <img src={info.picture.picture} style={{height: '80%', width: '80%', objectFit: 'cover'}} alt="Preview"/>
                </Card>
                <Title level="2" weight="semibold"
                       style={{
                           marginTop: 16,
                           marginBottom: 16,
                           marginLeft: 8,
                           marginRight: 8,
                           color: '#797b7a'
                       }}>{info.name.name} <img src={hot} alt="HOT"/></Title>
                <Grid container
                      justify="space-evenly"
                      alignItems="center"
                      style={{
                          marginLeft: 8, marginRight: 8
                      }}>
                    <Grid item xs={8}>
                        <Select ref={select} defaultValue='l' placeholder="Выберите размер" style={{width: '40%'}}>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </Select>
                    </Grid>
                    <Grid item xs>
                        <Typography align="right">
                            <Title level="1" weight="heavy"
                                   style={{color: '#FFF', marginRight: 16}}>{info.cost.cost}</Title>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                      justify="space-evenly"
                      alignItems="center"
                      style={{
                          marginTop: 16,
                          marginBottom: 16,
                          marginLeft: 8,
                          marginRight: 8
                      }}>
                    <Grid item xs={6}>
                        <Typography align="left">
                            <Title level="2" weight="semibold"
                                   style={{color: '#797b7a'}}>Кол-во:</Title>
                        </Typography>
                    </Grid>
                    <Grid container item
                          xs={6}
                          justify="center"
                          alignItems="center">
                        <Grid item xs>
                            <Typography align="center" style={{color: "#4986cc", fontSize: 20}}
                                        onClick={() => setMerchCount(prevState => prevState === 1 ? 1 : prevState - 1)}>
                                -
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography align="center" style={{color: "white", fontSize: 20}}>
                                {merchCount}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography align="center" style={{color: "#4986cc", fontSize: 20}}
                                        onClick={() => setMerchCount(prevState => prevState + 1)}>
                                +
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Button
                    size="xl"
                    mode="primary"
                    onClick={() => {
                        let pic = info.picture.picture
                        let name = info.name.name
                        let cost = info.cost.cost
                        setOrderInfo({
                            picture: pic,
                            name: name,
                            cost: cost,
                            size: select.current.value,
                            count: merchCount
                        })
                        go('buyNow')
                    }}
                >
                    Купить сейчас
                </Button>
            </Div>
        </Panel>
    )
};


export default MerchDescription;