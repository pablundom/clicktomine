

export const classesAvailable: any[] = [];

export const serializable = (ctr: Function) => {
    ctr.prototype._$serializable = true;
    classesAvailable.push({name: ctr.prototype.constructor.name, prototype: ctr});
}


export const findClassByName = (n: any) => classesAvailable.find(c => c.name === n);