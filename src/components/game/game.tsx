import { Component, ComponentWillLoad, h, Host, Listen, State } from "@stencil/core"
import { Direction, Game, Size, Map } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "game.css",
	scoped: true,
})
export class AronGame implements ComponentWillLoad {
	@State() game: Game = Game.create(Map.load([
		["rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock"],
		["rock", "grass", "grass", "grass", "grass", "grass", "grass", "rock", "rock"],
		["rock", "grass", "grass", "grass", "grass", "grass", "grass", "rock", "rock"],
		["rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "rock"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["rock", "grass", "grass", "grass", "rock", "rock", "grass", "rock", "rock"],
		["rock", "grass", "grass", "grass", "rock", "rock", "grass", "grass", "rock"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["rock", "grass", "grass", "grass", "grass", "grass", "grass", "rock", "rock"],
		["rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "rock"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
		["rock", "rock", "rock", "grass", "grass", "grass", "grass", "rock", "rock"],
		["rock", "rock", "rock", "grass", "grass", "grass", "grass", "rock", "rock"],
		["rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock", "rock"],
	]))
	@Listen("keydown", { target: "window" })
	onKeyDown(event: KeyboardEvent) {
		let direction: Direction | undefined
		switch (event.key) {
			case "ArrowLeft":
				direction = "left"
				break
			case "ArrowRight":
				direction = "right"
				break
			case "ArrowUp":
				direction = "up"
				break
			case "ArrowDown":
				direction = "down"
				break
		}
		if (direction)
			this.game = this.game.move(direction)
	}
	componentWillLoad(): void {
		this.game = this.game.setViewport(new Size(window.innerWidth, window.innerHeight))
	}
	render() {
		return (
			<Host>
				<aron-map map={this.game.map} scope={this.game.scope}></aron-map>
				<aron-hero hero={this.game.hero} scope={this.game.scope}></aron-hero>
			</Host>
		)
	}
}
