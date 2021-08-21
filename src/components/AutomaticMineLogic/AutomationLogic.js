import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {ON_TICK} from "../../redux/types/automation.types";

export let AutomationLogic = ({onTick, automation, player,...props}) => {
    const [interval, setterInterval] = useState(undefined);
    useEffect(() => {
        clearInterval(interval);
        setterInterval(undefined);
        const i = setInterval(() => {
            if (automation.ticking) {
                onTick();
            }
        }, 1000);
        setterInterval(i);
    }, [automation.ticking]);

    return null;
}

const mapDispatchToProps = dispatch => {
    return {
        onTick: () => {
            dispatch({type: ON_TICK, payload: {ticks: 1}})
        }
    }
}

const mapStateToProps = state => {
    return {player: state.player, automation: state.automation}
}

AutomationLogic = connect(mapStateToProps, mapDispatchToProps)(AutomationLogic);