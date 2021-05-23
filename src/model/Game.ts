import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Map } from "./Map"
import { Position } from "./Position"

export class Game {
	constructor(readonly map: Map, readonly hero: Hero) {}

	move(direction: Direction): Game {
		const position = this.hero.position.move(direction)
		const tile = this.map.get(position)
		return tile?.walkable ? new Game(this.map, new Hero(position)) : this
	}
	static create(): Game {
		return new Game(world, new Hero(new Position(2, 1)))
	}
}

const world = Map.load([
	["rock", "rock", "rock", "rock", "rock", "rock", "rock"],
	["rock", "rock", "grass", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "grass", "rock"],
	["rock", "rock", "grass", "grass", "grass", "grass", "rock"],
	["rock", "rock", "grass", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "rock", "rock", "rock", "rock"],
])
