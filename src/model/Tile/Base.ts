import { Type } from "./Type"
import type { Map } from "../Map"
import { Point } from "../Point"
import { Layer } from "./Layer"

export abstract class Base {
	abstract readonly type: Type
	abstract readonly layer: Layer
	get up(): Base | undefined {
		return this.map.get(this.position.move("up"))
	}
	get down(): Base | undefined {
		return this.map.get(this.position.move("down"))
	}
	get left(): Base | undefined {
		return this.map.get(this.position.move("left"))
	}
	get right(): Base | undefined {
		return this.map.get(this.position.move("right"))
	}
	abstract walkable: boolean
	constructor(public position: Point, public map: Map) {}
}
export const types: { [type in Type]?: new (position: Point, map: Map) => Base } = {}
export function register(type: Type, create: new (position: Point, map: Map) => Base) {
	types[type] = create
}
