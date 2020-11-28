import React from 'react';
import { CardGrid } from '@vkontakte/vkui';

import pic_1 from '../img/merch/1.png'
import pic_2 from '../img/merch/2.png'
import pic_3 from '../img/merch/3.png'
import pic_4 from '../img/merch/4.png'
import pic_5 from '../img/merch/5.png'
import pic_6 from '../img/merch/6.png'
import pic_7 from '../img/merch/7.png'
import pic_8 from '../img/merch/8.png'

import MerchCard from './MerchCard';

const MerchList = ({activeFilter, go, setInfo}) => {

        return (activeFilter === 'wear') ? (
                <div>
                    <CardGrid>
                        <MerchCard picture={pic_3} name='Колледж куртка Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_4} name='Поло Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                    <CardGrid>
                        <MerchCard picture={pic_2} name='Утепленное худи Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_1} name='Джерси Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                    <CardGrid>
                        <MerchCard picture={pic_3} name='Худи Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_4} name='Худи Virtus.pro' cost='3 990 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                </div>
        )
            :
        (
                <div>
                    <CardGrid>
                        <MerchCard picture={pic_5} name='HyperX Alloy Origins Core' cost='9 990 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_8} name='HyperX Delloy SUPER gaming' cost='8 360 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                    <CardGrid>
                        <MerchCard picture={pic_7} name='HyperX Pulsefire Raid' cost='4 190 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_6} name='Pulsefire Dart' cost='6 085 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                    <CardGrid>
                        <MerchCard picture={pic_5} name='HyperX Alloy Origins Core' cost='9 990 ₽'go={go} setInfo={setInfo} />
                        <MerchCard picture={pic_8} name='HyperX Delloy SUPER gaming' cost='8 360 ₽'go={go} setInfo={setInfo} />
                    </CardGrid>
                </div>
        )
};


export default MerchList;