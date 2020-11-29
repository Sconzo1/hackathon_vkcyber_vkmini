import React, {Fragment, useState} from 'react'
import {Avatar, classNames, Div, HorizontalScroll, Panel, PanelHeaderBack, PanelHeaderContent} from '@vkontakte/vkui'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import Chip from '@material-ui/core/Chip'
import {makeStyles} from "@material-ui/styles"
import VirtusPro from '../img/VirtusPro.png'

import './VKCyber.css'

import MerchList from './MerchList'

const useStyles = makeStyles({
    chip: {
        color: "#797b7a",
        border: "1px solid #2d2d2d",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 500,
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 4,
        marginRight: 4,
    },
    chipSelect: {
        color: "#7da9da",
        border: "1px solid #23282e",
        background: "#23282e"
    }
})


const MerchShop = ({id, go, setInfo}) => {

    const classes = useStyles()

    const [activeFilter, setActiveFilter] = useState('wear')
    const [enabledChip, setEnabledChip] = useState(0)

    const filters = [
        {
            text: "Одежда",
            filterName: "wear"
        },
        {
            text: "Техника",
            filterName: "devices"
        },
        {
            text: "Аксессуары",
            filterName: "accessories"
        },
        {
            text: "Электроника",
            filterName: "electronics"
        },
    ]

    const handleClickChip = (typeId) => {
        setEnabledChip(typeId)
        setActiveFilter(filters[typeId].filterName)
    }

    const SelectorChip = _ => (
        <Fragment>
            {filters.map(({text}, typeId) => (
                <Chip
                    key={typeId}
                    className={classNames(classes.chip, enabledChip === typeId ? classes.chipSelect : "")}
                    style={typeId === filters.length - 1 ? {marginRight: 16} : {}}
                    label={text}
                    onClick={() => handleClickChip(typeId)}
                    variant="outlined"
                />
            ))}
        </Fragment>
    )

    return (
        <Panel id={id} className="Panel">
            <PanelHeader
                separator={false}
                left={<PanelHeaderBack/>}>
                <PanelHeaderContent
                    style={{marginLeft: '24px'}}
                    before={<Avatar size={40} src={VirtusPro}/>}
                >
                    Virtus.pro
                </PanelHeaderContent>
            </PanelHeader>

            <HorizontalScroll style={{marginTop: 8, marginBottom: 8}}>
                <Div style={{display: 'flex'}}>
                    <SelectorChip/>
                </Div>
            </HorizontalScroll>

            <MerchList activeFilter={activeFilter} style={{marginTop: 90}} go={go} setInfo={setInfo}/>

        </Panel>
    )
};

export default MerchShop