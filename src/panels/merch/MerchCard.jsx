import React from 'react';
import {Card, Text, Title} from '@vkontakte/vkui';

const MerchCard = ({picture, name, cost, go, setInfo}) => {

    const handleClick = () => {
        setInfo({picture: {picture}, name: {name}, cost: {cost}})
        go('merchDescription')
    }

    return (
        <Card
            size='m'
            mode="shadow"
            style={{background: '#232323', height: 260, textAlign: 'center'}}
            onClick={handleClick}
        >
            <img src={picture} style={{marginTop: 18, maxHeight: 180, height: 'auto', width: 'auto'}} alt={name}/>
            <Text weight="regular" style={{color: '#B4B4B9'}}>{name}</Text>
            <Title level="3" weight="heavy" style={{color: '#fff', marginTop: 8}}>{cost}</Title>
        </Card>
    )
};


export default MerchCard;