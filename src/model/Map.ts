import { Bounds } from "./Bounds"
import { Point } from "./Point"
import { Tile } from "./Tile"

export class Map {
	readonly size: { readonly width: number; readonly height: number }
	private readonly tiles: readonly Tile[][]
	private constructor(data: Tile.Type[][]) {
		this.tiles = data.map((row, y) => row.map((type, x) => Tile.load(type, new Point(x, y), this)))
		this.size = { width: this.tiles[0].length, height: this.tiles.length }
	}
	get(position: Point): Tile {
		return this.tiles[wrap(position.y, this.size.height)][wrap(position.x, this.size.width)]
	}
	*layer(layer: Tile.Layer, scope: Bounds): Generator<Tile | undefined> {
		for (const row of this.tiles.slice(scope.top, scope.bottom))
			for (const tile of row.slice(scope.left, scope.right).filter(tile => tile.layer == layer)) yield tile
	}
	static load(data: Tile.Type[][]): Map {
		return new Map(data)
	}
}
export namespace Map {}

function wrap(value: number, size: number): number {
	return value < 0 ? wrap(value + size, size) : value % size
}
