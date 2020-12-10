<header class="header header--sticky">
    <a class="logo">Stil</a>
    <nav class="navigation">
        <a href="#about">About</a>
        <a href="#colors">Colors</a>
        <a href="#grid">Grid</a>
    </nav>
</header>

<section class="section section--h-3-4">

<div class="wrap">

###### About

### Built to use

Just implement the css and create simple pages just using classes. Or include it in your Sass project and get the whole toolset for your exposal.

</div>
</section>
<section class="section background--black">

<div class="wrap">

###### installation

### How to use

Stil can be used in two different ways. As an implementable stylesheet where you don't have to do anything. Just use the classes or elements in your html and it will look good.

Or use it as a framework with a full set of sass tools. Create you own build of Stil using the settings and define your own variables.

#### Markup

Add the css to your html and it will work!

```html
<link rel="stylesheet" type="text/css" href="https://stil.style/base.css" />
```

#### Toolset

Install the package using npm or yarn

```bash
npm install stil --save-dev
# or
yarn add stil --save-dev
```

Add to your project in the Sass file

```scss
@import "stil-style";
// Now you can use all tools
```

Check the Settings and Output guide to see more settings and use cases.

</div>

</section>

<section class="section">

<div class="wrap">

###### Colors

### All colors

<color-table :colors="['Red','Orange','Yellow','Green','Blue','Brown','Purple','Pink','Turquoise','Gray','Black','White']" />

</div>
</section>

<section class="section background--green-40">

<div class="wrap">

###### Grid

### The grid explained

#### Partials

<div class="rowgap--1 space--2 background--green border-radius--2">
    <div class="column full space--2 border-radius--1 background--white">
        <p>column full</p>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
     <div class="column half space--2 border-radius--1 background--white">
        <p>column half</p>
    </div>
     <div class="column half space--2 border-radius--1 background--white">
        <p>column half</p>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
    <div class="column third space--2 border-radius--1 background--white">
        <p><code>column third</code></p>
    </div>
    <div class="column two-third space--2 border-radius--1 background--white">
        <p>column two-third</p>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
    <div class="column quarter space--2 border-radius--1 background--white">
        <p>column quarter</p>
    </div>
    <div class="column three-quarter space--2 border-radius--1 background--white">
        <p>column three-quarter</p>
    </div>
</div>

</div>

#### Toolset

</section>
