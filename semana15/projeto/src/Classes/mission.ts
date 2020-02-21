export abstract class Mission {
    constructor(
        protected beginDate: Date,
        protected endDate: Date,
        protected teachersList: string[],
        protected studentsList: string[],
    ) {}
}