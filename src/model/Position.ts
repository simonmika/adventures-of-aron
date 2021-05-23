import { Direction } from "./Direction"

export class Position {
	constructor(readonly x: number, readonly y: number) {}
	add(position: Position): Position {
		return new Position(this.x + position.x, this.y + position.y)
	}
	subtract(position: Position): Position {
		return new Position(this.x - position.x, this.y - position.y)
	}
	move(direction: Direction, step = 1) {
		let result: Position

		switch (direction) {
			case "left":
				result = new Position(this.x - step, this.y)
				break
			case "right":
				result = new Position(this.x + step, this.y)
				break
			case "up":
				result = new Position(this.x, this.y - step)
				break
			case "down":
				result = new Position(this.x, this.y + step)
				break
		}
		return result
	}
}
