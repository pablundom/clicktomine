

export const repositoryAvailable: any[] = [];

export const repository = (rep: any, repName: string) => {
    repositoryAvailable.push({repository: rep, repositoryName: repName});
    return (ctr: Function) => {
        ctr.prototype._$repository = repName;
    }
}


export const findByRepositoryName = (n: any) => repositoryAvailable.find(c => c.repositoryName === n);