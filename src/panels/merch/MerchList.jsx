import React, {Fragment} from 'react';
import {CardGrid} from '@vkontakte/vkui';

import pic_1 from '../../img/merch/1.png'
import pic_2 from '../../img/merch/2.png'
import pic_3 from '../../img/merch/3.png'
import pic_4 from '../../img/merch/4.png'
import pic_5 from '../../img/merch/5.png'
import pic_6 from '../../img/merch/6.png'
import pic_7 from '../../img/merch/7.png'
import pic_8 from '../../img/merch/8.png'

import MerchCard from './MerchCard';
import {Typography} from "@material-ui/core";


const MerchList = ({activeFilter, go, setInfo}) => {

    const wears = [
        {
            picture: pic_3,
            name: "Колледж куртка Virtus.pro",
            price: "3 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_4,
            name: "Поло Virtus.pro",
            price: "2 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_2,
            name: "Утепленное худи Virtus.pro",
            price: "3 490 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_1,
            name: "Джерси Virtus.pro",
            price: "1 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_3,
            name: "Худи Virtus.pro",
            price: "3 190 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_4,
            name: "Худи Virtus.pro",
            price: "3 090 ₽",
            go: go,
            setInfo: setInfo
        },
    ]

    const devices = [
        {
            picture: pic_5,
            name: "HyperX Alloy Origins Core",
            price: "9 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_8,
            name: "HyperX Delloy SUPER gaming",
            price: "6 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_7,
            name: "HyperX Pulsefire Raid",
            price: "5 490 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_6,
            name: "Pulsefire Dart",
            price: "1 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_5,
            name: "HyperX Alloy Origins Core",
            price: "9 990 ₽",
            go: go,
            setInfo: setInfo
        },
        {
            picture: pic_8,
            name: "HyperX Delloy SUPER gaming",
            price: "6 990 ₽",
            go: go,
            setInfo: setInfo
        },
    ]

    let needFilter = []

    switch (activeFilter) {
        case 'wear':
            needFilter = wears
            break;
        case 'devices':
            needFilter = devices
            break;
        case 'accessories':
            break;
        case 'electronics':
            break;
        default:
            break;
    }


    return (needFilter.length !== 0 ?
            <Fragment>
                {[...Array(needFilter.length / 2).keys()].map(i => (
                    <CardGrid key={i}>
                        <MerchCard picture={needFilter[2 * i].picture} name={needFilter[2 * i].name}
                                   cost={needFilter[2 * i].price}
                                   go={needFilter[2 * i].go}
                                   setInfo={needFilter[2 * i].setInfo}/>
                        <MerchCard picture={needFilter[2 * i + 1].picture} name={needFilter[2 * i + 1].name}
                                   cost={needFilter[2 * i + 1].price} go={needFilter[2 * i + 1].go}
                                   setInfo={needFilter[2 * i + 1].setInfo}/>
                    </CardGrid>
                ))}
            </Fragment>
            :
            <Fragment>
                <Typography variant="h6" align="center"
                            style={{
                                color: "#797b7a",
                                fontFamily: "inherit",
                            }}>
                    Пока нет товаров
                </Typography>
            </Fragment>
    )
};


export default MerchList;