<template>
	<input class="navigation-input" type="checkbox" id="toggle-menu" />
	<label class="navigation-toggle" for="toggle-menu"><span></span></label>
	<label class="navigation-background" for="toggle-menu"></label>

	<header class="header header--sticky background--white">
		<a class="logo" href="/">Stil</a>
		<nav class="navigation nav-bar align-center">
			<ul>
				<li>
					<a class="navigation__link" href="/"><span>About</span></a>
				</li>
				<li>
					<a class="navigation__link" href="/docs"><span>Docs</span></a>
					<ul>
						<li>
							<a class="navigation__link" href="/docs/utility"
								><span>Utility</span></a
							>
						</li>
						<li>
							<a class="navigation__link" href="/docs/settings"
								><span>Settings</span></a
							>
						</li>
						<li>
							<a class="navigation__link" href="/docs/output"
								><span>Output</span></a
							>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<div></div>
	</header>

	<Content class="content" />
</template>