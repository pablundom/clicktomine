import {Resource} from "./Resource";

import {serializable} from "../decorators/serializable";

@serializable
export class ResourceBag{
    private bag: Map<Resource, number> = new Map()


    public get(id: number): Resource {
        // @ts-ignore
        return [...this.bag.keys()].find(f => f.id === id);
}

    private has(resourceName: string) {
        // @ts-ignore
        return this.getResource(resourceName) !== undefined;
    }

    public addResource(resource: Resource, amount: number) {
        const storedResource = this.get(resource.id);
        if (storedResource) {
            // @ts-ignore
            this.bag.set(storedResource, amount + this.bag.get(storedResource));
        } else {
            this.bag.set(resource, amount);
        }
    }

}