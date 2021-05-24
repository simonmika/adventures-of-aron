import { Direction } from "./Direction"
import { Size } from "./Size"

export class Point {
	get distance(): number {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
	constructor(readonly x: number, readonly y: number) {}
	add(position: Point): Point {
		return new Point(this.x + position.x, this.y + position.y)
	}
	subtract(position: Point): Point {
		return new Point(this.x - position.x, this.y - position.y)
	}
	move(direction: Direction, step: number | Size = 1) {
		let result: Point
		if (typeof step == "number")
			step = new Size(step, step)
		switch (direction) {
			case "left":
				result = new Point(this.x - step.width, this.y)
				break
			case "right":
				result = new Point(this.x + step.width, this.y)
				break
			case "up":
				result = new Point(this.x, this.y - step.height)
				break
			case "down":
				result = new Point(this.x, this.y + step.height)
				break
		}
		return result
	}
	toString(): string {
		return `${this.x}, ${this.y}`
	}
}
