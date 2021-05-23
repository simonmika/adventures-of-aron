import { Type } from "./Type"

export abstract class Base {
	abstract type: Type
	abstract walkable: boolean
}
export const types: { [type in Type]?: new () => Base } = {}
export function register(type: Type, create: new () => Base) {
	types[type] = create
}
