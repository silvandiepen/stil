<template>
	<section class="section" :class="backgroundClass">
		<div class="wrap">
			<slot />
		</div>
	</section>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: null,
		},
	},
	computed: {
		backgroundClass() {
			if (this.$props.color) {
				return `background--${this.$props.color}`;
			} else {
				return null;
			}
		},
	},
};
</script>