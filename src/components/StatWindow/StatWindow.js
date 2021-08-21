import {connect} from "react-redux";
import React from "react";
import "./StatWindow.css"
import {ItemIcon} from "../ItemIcon/ItemIcon";

export let StatWindow = ({player,...props}) => {
    const getResourcesArray = () => {
        const res = [];
        player.resourceBag.bag.forEach((value, key) => {
            res.push({resource: key, amount: value});
        })
        return res;
    }
    return (
        <div className="stat-window">
            <h2>Recursos</h2>
            {getResourcesArray().map((item, key) => {
                return <div key={item.resource.id}>({item.amount}) <ItemIcon image={item.resource.image} /> {item.resource.name}</div>
            })}
            <h2>Estadísticas</h2>
            <div><b>Número total de Clicks:</b> {player?.stat.totalClicks}</div>
            <div> <b>Número total de Ticks:</b> {player?.stat.totalTicks}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.player
    }
}

StatWindow = connect(mapStateToProps, null)(StatWindow);