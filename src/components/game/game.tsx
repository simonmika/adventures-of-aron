import { Component, ComponentWillLoad, h, Host, Listen, State } from "@stencil/core"
import { Direction, Game, Map, Size } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "game.css",
	scoped: true,
})
export class AronGame implements ComponentWillLoad {
	@State() game: Game = Game.create(
		Map.load([
			["forest", "forest", "forest", "rock", "rock", "forest", "forest", "forest", "rock"],
			["forest", "gravel", "gravel", "gravel", "water", "water", "gravel", "forest", "rock"],
			["forest", "gravel", "gravel", "gravel", "water", "water", "gravel", "forest", "rock"],
			["rock", "gravel", "gravel", "grass", "grass", "grass", "gravel", "gravel", "rock"],
			["gravel", "gravel", "grass", "grass", "grass", "grass", "grass", "gravel", "forest"],
			["gravel", "gravel", "grass", "grass", "grass", "grass", "grass", "gravel", "forest"],
			["rock", "gravel", "gravel", "grass", "grass", "grass", "gravel", "rock", "rock"],
			["rock", "gravel", "gravel", "gravel", "grass", "gravel", "gravel", "gravel", "forest"],
			["gravel", "gravel", "gravel", "water", "water", "water", "gravel", "gravel", "gravel"],
			["gravel", "gravel", "gravel", "water", "water", "water", "gravel", "gravel", "gravel"],
			["forest", "gravel", "gravel", "gravel", "grass", "gravel", "gravel", "forest", "forest"],
			["forest", "gravel", "gravel", "grass", "grass", "grass", "gravel", "gravel", "forest"],
			["forest", "gravel", "grass", "grass", "grass", "grass", "grass", "gravel", "forest"],
			["forest", "gravel", "grass", "grass", "grass", "grass", "grass", "gravel", "forest"],
			["rock", "rock", "rock", "gravel", "gravel", "gravel", "gravel", "forest", "forest"],
			["rock", "rock", "rock", "gravel", "gravel", "gravel", "gravel", "forest", "forest"],
			["rock", "forest", "forest", "forest", "forest", "forest", "forest", "forest", "forest"],
		])
	)
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
		if (direction) this.game = this.game.move(direction)
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
