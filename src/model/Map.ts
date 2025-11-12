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
		return this.tiles[position.y][position.x] ?? new Tile.Forest(position, this)
	}
	*slice(scope: Bounds): Generator<Tile> {
		for (const point of scope.points()) yield this.get(point)
	}
	*layer(layer: Tile.Layer, scope: Bounds): Generator<Tile | undefined> {
		for (const tile of this.slice(scope)) if (tile.layer == layer) yield tile
	}
	static load(data: Tile.Type[][]): Map {
		return new Map(data)
	}
}
export namespace Map {}
