import { Type } from "./Type"
import type { Map } from "../Map"
import { Point } from "../Point"

export abstract class Base {
	abstract type: Type
	get variant(): `${Type}-U${Type}L${Type}D${Type}R${Type}` {
		return `${this.type}-U${this.up?.type ?? this.type}L${this.left?.type ?? this.type}D${
			this.down?.type ?? this.type
		}R${this.right?.type ?? this.type}` as `${Type}-U${Type}L${Type}D${Type}R${Type}`
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
