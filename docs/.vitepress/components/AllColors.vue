<template>
	<div class="color-dots-group wrap gap--1">
		<div class="item" v-for="color in colors" :key="color">
			<div
				class="no-resize"
				:class="`background--${lowerCase(
					color
				)} color--accent border-radius--1 width--10
					height--10 border--1 `"
			>
				<span class="tooltip">
					{{ color }}
				</span>
			</div>
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
.color-dots-group {
	display: flex;
	position: relative;

	* + * {
		margin-top: 0;
	}
	& + .group {
		margin-top: 1em;
	}
	&.wrap {
		flex-wrap: wrap;
	}
	.item {
		position: relative;
	}
}
</style>