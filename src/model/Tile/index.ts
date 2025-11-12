import { Base, types } from "./Base"
import { Grass } from "./Grass"
import { Rock } from "./Rock"
import { Type } from "./Type"
import { Gravel } from "./Gravel"
import { Forest } from "./Forest"
import { Water } from "./Water"
import { Point } from "../Point"
import type { Map } from "../Map"

export { Grass, Rock, Water, Gravel, Forest, Base, Type }

export function load(type: Type, position: Point, map: Map): Base {
	const t = types[type]
	return t ? new t(position, map) : new Rock(position, map)
}
