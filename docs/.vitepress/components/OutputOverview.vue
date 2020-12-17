<template>
	<div class="output-overview row">
		<div class="output-overview__list column medium--half">
			<ul class="output-list">
				<li
					class="output-list__item border-radius--1 space--2"
					v-for="key in output"
					@click="activate(key)"
					:class="[
						actives.includes(key)
							? 'output-list__item--active'
							: 'output-list__item--not-active',
					]"
				>
					{{ key }}
				</li>
			</ul>
		</div>
		<div class="column medium--half">
			<div
				v-if="actives.length > 0"
				class="output-code font-code"
				style="top: 100px; position: sticky"
			>
				<textarea>{{ activeOutputs }}</textarea>
			</div>
		</div>
	</div>
</template>
<script type="typescript">
import OutputSettings from "../../output.json";

export default {
	data: () => ({
		actives: [],
	}),
	computed: {
		output() {
			return OutputSettings.output;
		},
		activeOutputs() {
			let actives = OutputSettings.output.filter((item) =>
				this.actives.includes(item)
			);

			return `
$stil-output: (
	"${actives.join('",\n\t"')}"
);
			`;
		},
	},
	methods: {
		activate(key) {
			if (this.actives.includes(key)) {
				this.actives.splice(this.actives.indexOf(key), 1);
			} else {
				this.actives.push(key);
			}
		},
	},
};
</script>

<style lang="scss">
.output-list {
	&__item {
		display: block;
		& + & {
			margin-top: 0.5em;
		}
		&--active {
			background-color: var(--contra);
			color: var(--current);
		}
	}
}
.output-code {
	font-family: var(--font-code);
	padding: var(--spacing, 1em);
	textarea {
		padding: var(--spacing, 1em);
		height: 100%;
		width: 100%;
		background-color: var(--dark);
		color: var(--light);
		border-radius: var(--border-radius);
		border: none;
		font-size: 1em;
		font-family: var(--font-code, "Courier New", Courier, monospace);
	}
}
</style>