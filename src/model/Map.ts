import { Point } from "./Point"
import * as Tile from "./Tile"

export class Map {
	readonly size: { readonly width: number; readonly height: number }
	private readonly tiles: readonly Tile.Base[][]
	private constructor(data: Tile.Type[][]) {
		this.tiles = data.map((row, y) => row.map((type, x) => Tile.load(type, new Point(x, y), this)))
		this.size = { width: this.tiles[0].length, height: this.tiles.length }
	}
	get(position: Point): Tile.Base {
		return this.tiles[wrap(position.y, this.size.height)][wrap(position.x, this.size.width)]
	}
	static load(data: Tile.Type[][]): Map {
		return new Map(data)
	}
}

function wrap(value: number, size: number): number {
	return value < 0 ? wrap(value + size, size) : value % size
}
