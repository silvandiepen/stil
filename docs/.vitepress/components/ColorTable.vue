<template>
	<div
		class="group space--2 border-radius--2"
		:class="`background--${lowerCase(color)}`"
		v-for="color in colors"
		:key="color"
	>
		<div
			class="no-resize"
			:class="`background--${lowerCase(
				color
			)} color--accent border-radius--1 width--10
					height--10 border--1 `"
		></div>
		<div class="title grow space--2">
			<h4 class="grow space--1" :class="`color--${lowerCase(color)}`">
				{{ color }}
			</h4>

			<div v-if="shades" class="space--2">
				<div class="row gap--1">
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
			</div>
		</div>
		<div style="width: 33.33%">
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
.group {
	display: flex;
	background-color: var(--text) !important ;

	* + * {
		margin-top: 0;
	}
	& + .group {
		margin-top: 1em;
	}
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