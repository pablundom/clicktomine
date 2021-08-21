import React, {useEffect} from 'react';
import './App.css';
import {routes} from "../../routes";
import {Router, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import {Header} from "../Header/Header.js";
import {StatWindow} from "../StatWindow/StatWindow.js";
import {connect} from "react-redux";
import {LOAD_SAVE, LOAD_SAVE_COMPRESS} from "../../redux/types/types";
import {fromJson} from "../../utils/util.json.js";
import {AutomationLogic} from "../AutomaticMineLogic/AutomationLogic";
import {Button} from "../utils/Button/Button";
import {ADD_MINER, ON_TICKS_COME_BACK, START_TICKING} from "../../redux/types/automation.types";
import {get} from "../../utils/util.repository";
import {automationRepository} from "../../repository/automation.repository";
import {Player} from "../../entity/Player";

const history = createBrowserHistory();

export let App = ({onLoadSave,onLoadFromLongTime, onReset, onAddMiner, ...props}) => {
    useEffect(() => {
        onLoadSave(localStorage.getItem('player_info'));
        onLoadFromLongTime();
    }, []);

    const deleteLocalSave = () => {
        localStorage.removeItem('player_info');
        onReset(new Player());
    }

    return (
        <div className="App-Container">

    <div className="App">
        <AutomationLogic />
      <Router history={history}>
          <Header />
          <div className="app-body-container">
              <Switch>
                  {routes.map((r, k) => <React.Fragment key={k}>{r}</React.Fragment>)}
              </Switch>
              <div className="app-body-stat-window">
                  <StatWindow />
              </div>
              <Button onClick={deleteLocalSave}>Borrar datos temporales</Button>
          </div>
      </Router>
    </div>
        </div>
  );
}


const mapDispatchToState = dispatch => {
    return {
        onLoadSave: (save) => dispatch({type: LOAD_SAVE_COMPRESS, payload: save}),
        onAddMiner: () => dispatch({type: ADD_MINER, payload: get(1, automationRepository)}),
        onReset: (data) => dispatch({type: LOAD_SAVE, payload: data}),
        onLoadFromLongTime: () => dispatch({type: ON_TICKS_COME_BACK, payload: {}}),
    }
}
const mapStateToProps = state => {
    return {player: state.player};
}
App = connect(mapStateToProps, mapDispatchToState)(App)