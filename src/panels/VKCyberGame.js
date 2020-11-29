import React from 'react';
import {Div, SimpleCell, Subhead} from '@vkontakte/vkui';

import './VKCyber.css';

import likeIcon from '../img/like_20.svg';
import blueIcon from '../img/blue_20.svg';
import playIcon from '../img/play_20.svg';
import postIcon from '../img/post_20.svg';


const VKCyberGame = ({game, onActiveGameChanged, go}) => {

    let img_src = null;
    for (let key in game.img) {
        img_src = game.img[key];
	}


    return (
        <Div onClick={(e) => {
            go(e);
            onActiveGameChanged(game)
        }} data-to="eventTable">
            <div className="gameInfo">
                <div className="column">
                    <img style={{marginTop: "8px"}} src={img_src} alt="Img"/>
                </div>

                <div>
                    <Subhead style={{marginLeft: "20px"}} weight="semibold">{game.name}</Subhead>

                    <div className="column">
                        <div className="grid-container">
                            <SimpleCell disabled before={<img src={likeIcon} alt="Like"/>}> &nbsp; {game.like} </SimpleCell>
                            <SimpleCell disabled before={<img src={postIcon} alt="Post"/>}> &nbsp; {game.post} </SimpleCell>
                            <SimpleCell disabled before={<img src={playIcon} alt="Play"/>}> &nbsp; {game.play > 1000 ? (game.play /1000).toFixed(1) + "k": game.play} </SimpleCell>
                            <SimpleCell disabled before={<img src={blueIcon} alt="Blue"/>}> &nbsp; {game.blue} </SimpleCell>
                        </div>
                    </div>
                </div>
            </div>

        </Div>
    );
}

export default VKCyberGame;