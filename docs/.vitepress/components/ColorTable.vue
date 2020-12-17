<template>
	<div
		class="color-group space--2 border-radius--2"
		:class="`background--${lowerCase(color)}`"
		v-for="color in colors"
		:key="color"
	>
		<div class="color-dot-name">
			<div
				class="color-dot"
				:class="`background--${lowerCase(color)} color--accent`"
			></div>

			<h4 class="color-name" :class="`color--${lowerCase(color)}`">
				{{ color }}
			</h4>
		</div>

		<div v-if="shades" class="color-shades">
			<span
				v-for="idx in 9"
				:key="idx"
				:class="`background--${lowerCase(color)}-${
					idx * 10
				} space--1 font-size--2 border-radius--1`"
				style="position: relative"
				>{{ idx * 10 }}
				<span class="tooltip">
					<code>--{{ lowerCase(color) }}-{{ idx * 10 }}</code>
				</span>
			</span>
		</div>
		<div class="color-code">
			<code>--{{ lowerCase(color) }}</code
			><br />
			<code> .background--{{ lowerCase(color) }} </code><br />
			<code>.color--{{ lowerCase(color) }}</code>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		colors: {
			type: Array,
			default: [],
		},
		shades: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		lowerCase: (str) => str.toLowerCase(),
	},
};
</script>
<style lang="scss">
.color-group {
	box-shadow: 0 0 2em 0em rgba(0, 0, 0, 0.25);
	display: grid;
	grid-template:
		"dot-name dot-name dot-name code"
		"shades shades shades code";

	background-color: var(--text) !important ;

	* + * {
		margin-top: 0;
	}
	& + .color-group {
		margin-top: 1em;
	}
}
.color-dot-name {
	grid-area: dot-name;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.color-dot {
	width: 5em;
	height: 5em;
	border-radius: var(--border-radius);
}
.color-name {
	padding: var(--space);
}
.color-code {
	code ~ code {
		margin-top: 0.5em;
	}
	grid-area: code;
}
.color-shades {
	grid-area: shades;
}
.on-end {
	justify-self: flex-end;
}
.no-shrink {
	flex-shrink: 0;
}
.shrink {
	flex-shrink: 1;
}
.no-resize {
	flex-shrink: 0;
	flex-grow: 0;
}
.grow {
	flex-grow: 1;
}
.no-grow {
	flex-grow: 0;
}
</style>