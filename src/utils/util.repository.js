


export const get = (id, repository, prototype) => {
    const res = repository.find(item => item.id === id);
    if (prototype && res) {
        let prot = new prototype();
        prot = Object.assign(prot, res);
        return prot;
    }
    return {...res};
}

export const findById = (id, repository, prototype) => {
    return findBy("id", id, repository, prototype);
}
export const findByOid = (id, repository, prototype) => {
    return findBy("oid", id, repository, prototype);
}


export const findBy = (type, attr, repository) => {
    return repository.find(item => item[type] === attr);
}

