import type { Map } from "../Map"
import { Point } from "../Point"
import { Base, types } from "./Base"
import { Variant as _Variant } from "./Variant"
import { Type as _Type } from "./Type"
import { Rock } from "./Rock"

import "./Grass"
import "./Gravel"
import "./Forest"
import "./Water"

export type Tile = Base

export namespace Tile {
	export import Variant = _Variant
	export import Type = _Type

	export function load(type: Type, position: Point, map: Map): Tile {
		return new (types[type] ?? Rock)(position, map)
	}
}
