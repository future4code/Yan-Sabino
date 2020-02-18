export abstract  class Employee {
    protected name: string;
    protected wage: number;
    protected instances: number;


    constructor(name: string, wage: number, instances: number){
        this.name = name
        this.wage = wage
        this.instances = instances
    }

    public abstract sayJob(): void
}