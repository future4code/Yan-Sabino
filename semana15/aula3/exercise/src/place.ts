import {Residence} from './residence'
import {Commerce} from './commerce'
import {Industry} from './industry'

export abstract class Place {
  constructor(public cep: string) {}
}
