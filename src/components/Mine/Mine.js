import React from "react";
import {StoneMine} from "./StoneMine/StoneMine.js";
import {connect} from "react-redux";
import {get} from "../../utils/util.repository";
import {minesRepository} from "../../repository/mines.repository";


export let Mine = ({onClickMine, mineId, ...props}) => {
    return (
        <React.Fragment>
            <StoneMine mineId={1} />
        </React.Fragment>
    )
}


Mine = connect(null)(Mine)