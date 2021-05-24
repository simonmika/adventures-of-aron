import { Point } from "./Point"
import * as Tile from "./Tile"

export class Map {
	readonly size: { readonly width: number; readonly height: number }
	private constructor(private readonly tiles: readonly Tile.Base[][]) {
		this.size = { width: tiles[0].length, height: tiles.length }
	}
	get(position: Point): Tile.Base {
		return this.tiles[wrap(position.y, this.size.height)][wrap(position.x, this.size.width)]
	}
	static load(data: Tile.Type[][]): Map {
		return new Map(data.map(row => row.map(Tile.load)))
	}
}

function wrap(value: number, size: number): number {
	return value < 0 ? wrap(value + size, size) : value % size
}
