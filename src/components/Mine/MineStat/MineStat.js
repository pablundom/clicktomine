import "./MineStat.css";
import {get} from "../../../utils/util.repository";
import {minesRepository} from "../../../repository/mines.repository";
import {
    calculateResourcesEarnedByAutomationEntitiesInTicks,
    findAssignedMinersByMine
} from "../../../utils/util.automation";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {calculateMineAverage} from "../../../utils/utils.resource";


export let MineStat = ({player,automation_entities,mineId,...props}) => {
    const mine = get(mineId, minesRepository);
    const [resourcesStat, setResourcesStat] = useState([]);
    useEffect(() => {
        const minersAssigedToMine = findAssignedMinersByMine(player, mine);
        const resourcesCalculated = calculateResourcesEarnedByAutomationEntitiesInTicks(100, minersAssigedToMine, calculateMineAverage);
        resourcesCalculated.forEach((r,k,arr) => {
            if (r.amount === 0) {
                return;
            }
            r.amount = r.amount / 100;
        })
        setResourcesStat(resourcesCalculated);
    }, [automation_entities])
    return (
        <div className="mine-stat-container">
            <h2>{mine.name}</h2>
            <div><b>Mineros asignados: </b> {findAssignedMinersByMine(player, mine).length}</div>
            <h3>Estadisticas</h3>
            {resourcesStat.map((r,k) =>
                <div key={k}><b>Media de {r.resource.name}</b>: {r.amount}</div>)
            }
            <h4>Recursos Recolectados</h4>
        </div>
    )
}



const mapStateToProps = state => {
    return {player: state.player, automation_entities: state.player.automation_entities};
}
MineStat = connect(mapStateToProps)(MineStat)