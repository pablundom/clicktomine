import React from "react";
import "./StoneMine.css"
import {minesRepository} from "../../../repository/mines.repository";
import {get} from "../../../utils/util.repository";
import {Button} from "../../utils/Button/Button";
import {ADD_MINER, ASSIGN_MINER} from "../../../redux/types/automation.types";
import {automationRepository} from "../../../repository/automation.repository";
import {connect} from "react-redux";
import {findUnassignedMiners} from "../../../utils/util.automation";
import {Miner} from "../../../entity/Miner";
import {CLICK_MINE} from "../../../redux/types/types";
import {MineStat} from "../MineStat/MineStat";

export let StoneMine = ({onClickMine, mineId, onAssignMiner, player, onAddMiner, ...props}) => {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClickMine(get(mineId, minesRepository))
    }
    const addMiner = () => {
        onAddMiner(1);
    };
    const assignMiner = () => {
        if (findUnassignedMiners(player).length === 0) {
            return;
        }
        onAssignMiner(get(1, minesRepository), findUnassignedMiners(player)[0]);
    }
    return (
        <div>
        <div className="stone-mine-container">
            <div className="stone-mine-grid">
                <MineStat mineId={mineId} />
                <div className="stone-mine" onMouseDown={handleClick}></div>
            </div>

        </div>
            <Button onClick={assignMiner}  disabled={findUnassignedMiners(player).length === 0}>
                Asignar Minero ({findUnassignedMiners(player).length})</Button>
            <Button onClick={addMiner}>Añadir Minero</Button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        player: state.player
    }
}
const mapDispatchToState = dispatch => {
    return {
        onAssignMiner: (mine, miner) => {
            dispatch({type: ASSIGN_MINER, payload: {mine: mine, miner: miner}})
        },
        onAddMiner: (id) => dispatch({type: ADD_MINER, payload: get(id, automationRepository, Miner)}),
        onClickMine: (payload) => {
            dispatch({type: CLICK_MINE, payload})
        }
    }
}
StoneMine= connect(mapStateToProps, mapDispatchToState)(StoneMine);