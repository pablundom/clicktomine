import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./rootReducer";
import clickerSaga from "./sagas/clicker.saga";
import saveSaga from "./sagas/save.saga";
import resourceSaga from "./sagas/resource.saga";
import {automationSaga} from "./sagas/automation.saga";



export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store =  createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(automationSaga);
    sagaMiddleware.run(clickerSaga);
    sagaMiddleware.run(saveSaga);
    sagaMiddleware.run(resourceSaga);
    return store;
}