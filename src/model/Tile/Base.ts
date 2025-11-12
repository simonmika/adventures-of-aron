import { Type } from "./Type"
import type { Map } from "../Map"
import { Point } from "../Point"

export abstract class Base {
	abstract type: Type
	get variant(): `${Type}-${Type}-${Type}-${Type}-${Type}` {
		return `${this.type}-${this.up?.type ?? this.type}-${this.left?.type ?? this.type}-${
			this.down?.type ?? this.type
		}-${this.right?.type ?? this.type}`
	}
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
