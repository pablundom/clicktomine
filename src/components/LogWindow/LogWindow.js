import {connect} from "react-redux";
import React from "react";
import "./LogWindow.css"
import {ItemIcon} from "../ItemIcon/ItemIcon";

export let LogWindow = ({player,...props}) => {
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
                return <div key={item.resource}>({item.amount}) <ItemIcon image={item.resource.image} /> {item.resource.name}</div>
            })}
            <h2>Estadísticas</h2>
            <b>Número total de Clicks:</b> {player?.stat.totalClicks}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        player: state.player
    }
}

LogWindow = connect(mapStateToProps, null)(LogWindow);