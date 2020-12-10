<header class="header header--sticky">
    <a class="logo">Stil</a>
    <nav class="navigation">
        <a href="#about">About</a>
        <a href="#colors">Colors</a>
        <a href="#grid">Grid</a>
    </nav>
</header>

<section class="section section--h-3-4 clipped">

<h1 class="centered opacity--10" style="--centered-position: fixed; --centered-translate-y: -100%; --centered-top: 100%;color: var(--secondary); font-size: 80vw">stil</h1>

<div class="wrap">

###### About

### Built to use

Just implement the css and create simple pages just using classes. Or include it in your Sass project and get the whole toolset for your exposal.

</div>
</section>
<section class="section background--deepblue" style="--current-color: var(--secondary)">

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

<color-table :colors="['Red','Orange','Yellow','Lime','Grass','Green','Sky','Water','Blue','DeepBlue','Brown','Purple','DeepPurple','Rose','Lavender','Pink','Berry','Pomegranate','Turquoise','Gray','Black','White']" />

</div>
</section>

<section class="section">

<div class="wrap">

### Defined colors

<color-table :colors="['Primary','Secondary','Tertiary','Alert','Warning','Info','Dark','Light','Accent']" />

</div>
</section>

<section class="section background--gray-90">

<div class="wrap">

### Gradients

<div class="boxes boxes--auto gap--2">
<div class="box background--gradient"></div>

<div class="box background--gradient" style="--gradient-from: var(--red); --gradient-to: var(--blue)">
</div>
<div class="box background--gradient" style="--gradient-from: var(--green-30); --gradient-to: var(--green-40); --gradient-direction: to bottom;">
</div>
</div>

</div>
</section>

<section class="section background--green-40">

<div class="wrap">

###### Grid

### The grid explained

#### Partials

Stil works just with named partials. Just add the partial name to your column (in a row) and it will be the right width.

<div class="row gap--1 space--2 background--green border-radius--2">
    <div class="column full space--2 border-radius--1 background--white">
        <code>column full</code>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
     <div class="column half space--2 border-radius--1 background--white">
        <code>column half</code>
    </div>
     <div class="column half space--2 border-radius--1 background--white">
        <code>column half</code>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
    <div class="column third space--2 border-radius--1 background--white">
       <code>column third</code>
    </div>
    <div class="column two-third space--2 border-radius--1 background--white">
        <code>column two-third</code>
    </div>
</div>

<div class="row gap--2 space--2 background--green border-radius--2 space-top--3">
    <div class="column quarter space--2 border-radius--1 background--white">
        <code>column quarter</code>
    </div>
    <div class="column three-quarter space--2 border-radius--1 background--white">
        <code>column three-quarter</code>
    </div>
</div>

</div>
</section>
<section class="section background--green">
<div class="wrap">

#### Responsive Partials

Try resizing your window and see how the blocks will go from third on a big screen, halfs on a medium screen and full on mobile.

<div class="row gap--2 space--2 background--white border-radius--2">
    <div class="column small--full medium--half large--third space--2 border-radius--1 background--green-20">
        <code>column small--full medium--half large--third</code>
    </div>  
    <div class="column small--full medium--half large--third space--2 border-radius--1 background--green-30">
        <code>column small--full medium-half large--third</code>
    </div>  
    <div class="column small--full medium--half large--third space--2 border-radius--1 background--green-40">
        <code>column small--full medium--half large--third</code>
    </div>  
</div>

</div>
</section>
