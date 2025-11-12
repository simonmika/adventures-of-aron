import { Point } from "./Point"
import { Size } from "./Size"

export class Bounds {
	get left(): number {
		return this.leftTop.x
	}
	get right(): number {
		return this.leftTop.x + this.size.width
	}
	get top(): number {
		return this.leftTop.y
	}
	get bottom(): number {
		return this.leftTop.y + this.size.height
	}
	constructor(readonly leftTop: Point, readonly size: Size) {}
	inside(point: Point): boolean {
		return this.left <= point.x && point.x <= this.right && this.top <= point.y && point.y <= this.bottom
	}
	reduce(border = 1): Bounds {
		return new Bounds(
			this.leftTop.add(new Point(border, border)),
			new Size(this.size.width - 2 * border, this.size.height - 2 * border)
		)
	}
	*points(step = 1): Generator<Point> {
		let result = this.leftTop
		while (result.y < this.bottom) {
			while (result.x < this.right) {
				yield result
				result = result.move("right", step)
			}
			result = new Point(this.left, result.y + step)
		}
	}
}
export namespace Bounds {}
