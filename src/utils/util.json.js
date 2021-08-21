import {findClassByName} from "../decorators/serializable";
import {findByRepositoryName} from "../decorators/repository";
import {get} from "./util.repository";


const mapReplacer = (key, value) =>  {
    if (!value) {
        return value;
    }
    if(value instanceof Map) {
        return {
            _$dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    }
    if (value._$serializable === true) {
        value = Object.assign({_$dataType: value.constructor.name}, value);
    }
    return value;
}

export const toJson = data => {
    return JSON.stringify(data, mapReplacer);
}

export const fromJson = data => {
    return JSON.parse(data, mapReviver);
}

const mapReviver = (key, value) =>  {
    if(typeof value === 'object' && value !== null) {
        if (value._$dataType === 'Map') {
            return new Map(value.value);
        }
        if (value._$dataType) {
            const prot = findClassByName(value._$dataType);
            if (prot) {
                value = Object.assign(new prot.prototype(), value);
            }
        }
        if (value._$repository){
            const repository = findByRepositoryName(value._$repository);
            if (repository) {
                const res = Object.assign({}, get(value.id, repository.repository), value);
                return res;
            }
        }
        return value;
    }
    return value;
}
