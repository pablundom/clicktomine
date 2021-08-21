import {
    Route,
} from "react-router-dom";
import {Mine} from "./components/Mine/Mine.js";

export const routes = [
    (<Route path="/">
        <Mine />
    </Route>),
    (<Route path="/test2">Test</Route>)
]