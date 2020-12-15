<template>
	<div class="row gap--1">
		<div
			class="column full space--3 border-radius--1"
			style="background-color: var(--accent)"
			v-for="font in fonts"
			:key="font"
		>
			<h5 :class="`font--${lowerCase(font)}`">{{ font }}</h5>
			<p :class="`font--${lowerCase(font)}`" contenteditable="">
				a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
				A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
				0 1 2 3 4 5 6 7 8 9
			</p>
			<code style="background-color: var(--current)"
				>.font--{{ lowerCase(font).replace(" ", "-") }}</code
			>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		fonts: {
			type: Array,
			default: [],
		},
	},
	methods: {
		lowerCase: (str) => str.toLowerCase(),
	},
};
</script>

