import { Point } from "./Point"
import { Direction } from "./Direction"

export class Hero {
	constructor(readonly position: Point, readonly facing: Direction = "down") {}
	move(direction: Direction): Hero {
		return new Hero(this.position.move(direction), direction)
	}
}
export namespace Hero {}
