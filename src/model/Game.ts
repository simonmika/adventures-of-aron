import { Bounds } from "./Bounds"
import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Map } from "./Map"
import { Point } from "./Point"
import { Size } from "./Size"

export class Game {
	private constructor(readonly map: Map, readonly scope: Bounds, readonly hero: Hero) {}

	move(direction: Direction): Game {
		const hero = this.hero.move(direction)
		const tile = this.map.get(hero.position)
		return tile?.walkable ? new Game(this.map, this.scope, hero) : this
	}
	setViewport(viewport: Size): Game {
		const scope = new Bounds(
			this.scope.leftTop,
			new Size(Math.ceil(viewport.width / 64), Math.ceil(viewport.height / 64))
		)
		return new Game(this.map, scope, this.hero)
	}
	static create(world: Map): Game {
		return new Game(world, new Bounds(new Point(0, 0), new Size(8, 4)), new Hero(new Point(3, 3), "down"))
	}
}
export namespace Game {}
