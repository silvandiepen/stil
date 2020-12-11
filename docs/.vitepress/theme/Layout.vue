<template>
	<input class="navigation-input" type="checkbox" id="toggle-menu" />
	<label class="navigation-toggle" for="toggle-menu"><span></span></label>

	<header class="header header--sticky background--white">
		<a class="logo">Stil</a>
		<nav class="navigation nav-bar">
			<a class="navigation__link" href="#about"><span>About</span></a>
			<a class="navigation__link" href="#colors"><span>Colors</span></a>
			<a class="navigation__link" href="#grid"><span>Grid</span></a>
		</nav>
	</header>
	<Content class="content" />
</template>