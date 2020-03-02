import {User} from '../Interfaces/User'
import { Mission } from './mission';

export class Student implements User{
    constructor(
        public name: string,
        public email: string,
        public birthday: Date,
        public missionName: Mission,
    ){}
}