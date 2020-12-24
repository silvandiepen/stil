<template>
	<input class="navigation-input" type="checkbox" id="toggle-menu" />
	<label class="navigation-toggle" for="toggle-menu"><span></span></label>
	<label class="navigation-background" for="toggle-menu"></label>

	<header class="header header--sticky background--white">
		<a class="logo" href="/">Stil</a>
		<nav class="navigation nav-bar align-center">
			<!-- Primary Level -->
			<ul class="navigation__list">
				<li class="navigation__item" v-for="item in childrenOf(0)">
					<a class="navigation__link" :href="item.link">
						<span class="navigation__text">{{ item.name }}</span>
					</a>

					<!-- Secondary Level -->
					<ul class="navigation__list" v-if="hasChildren(item.id)">
						<li class="navigation__item" v-for="subitem in childrenOf(item.id)">
							<a class="navigation__link" :href="subitem.link">
								<span class="navigation__text">{{ subitem.name }}</span>
							</a>

							<!-- Tertiary Level -->
							<ul class="navigation__list" v-if="hasChildren(subitem.id)">
								<li
									class="navigation__item"
									v-for="subsubitem in childrenOf(subitem.id)"
								>
									<a class="navigation__link" :href="subsubitem.link">
										<span class="navigation__text">{{ subsubitem.name }}</span>
									</a>
								</li>
							</ul>
							<!-- / Tertiary Level -->
						</li>
					</ul>
					<!-- / Secondary Level -->
				</li>
			</ul>
			<!-- / Primary Level -->
		</nav>
		<div></div>
	</header>

	<Content class="content" />
</template>

<script setup lang="ts">
import { ref, computed, watch, defineAsyncComponent } from "vue";
import {
	useRoute,
	useSiteData,
	usePageData,
	useSiteDataByRoute,
} from "vitepress";

interface NavigationItem {
	id: number;
	order: number;
	parent: number;
	name: string;
	link: string;
}

const navigation: NavigationItem[] = [
	{ name: "About", link: "/", parent: 0, id: 1, order: 0 },
	{
		name: "Docs",
		link: "/docs/docs",
		id: 2,
		parent: 0,
		order: 1,
	},
	{ id: 3, parent: 2, order: 0, name: "Utility", link: "/docs/utility" },
	{ id: 4, parent: 2, order: 1, name: "Settings", link: "/docs/settings" },
	{ id: 5, parent: 2, order: 2, name: "Output", link: "/docs/output" },
];

const hasChildren = (id: number): boolean =>
	navigation.some((nav) => nav.parent === id);

const childrenOf = (id: number): NavigationItem[] =>
	navigation.filter((nav) => nav.parent === id);

const route = useRoute();

// const siteData = useSiteData<DefaultTheme.Config>();
// const siteRouteData = useSiteDataByRoute();
// const theme = computed(() => siteData.value.themeConfig);
// const page = usePageData();

console.log(route.path);
</script>