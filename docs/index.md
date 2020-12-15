<section class="section section--h-3-4 clipped">

<h1 class="centered opacity--10" style="--centered-position: fixed; --centered-translate-y: -100%; --centered-top: 100%;color: var(--secondary); font-size: 80vw">stil</h1>

<div class="container">

###### About

### Built to use

Just implement the css and create simple pages just using classes. Or include it in your Sass project and get the whole toolset for your exposal.

</div>
</section>
<section class="section background--deepblue" style="--current-color: var(--secondary)">

<div class="container">

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

<Section>

###### Colors

### All colors

<color-table shades :colors="['Red','Orange','Yellow','Lime','Grass','Green','Sky','Water','Blue','DeepBlue','Brown','Purple','DeepPurple','Rose','Lavender','Pink','Berry','Pomegranate','Turquoise','Gray','Black','White']" />

</Section>

<Section>

### Defined colors

<color-table :colors="['Primary','Secondary','Tertiary','Alert','Warning','Info','Dark','Light','Accent']" />

</Section>

<Section color="purple-80" style="--stil-content-max-width: 100%">

### Gradients

<div class="card-group gap--1">
<article class="card card--third">
<figure class="background--gradient">
</figure>

```html
<div class="box background--gradient"></div>
```

</article>

<article class="card card--third">
<figure class="background--gradient" style="--gradient-from: var(--red); --gradient-to: var(--blue)">
</figure>

```html
<div
  class="background--gradient"
  style="
            --gradient-from: var(--red);
            --gradient-to: var(--blue)"
></div>
```

</article>

<article class="card card--third">
<figure class="background--gradient" style=" height: 5em; --gradient-from: var(--green-30); --gradient-to: var(--green-40); --gradient-direction: to bottom;"><p>fdasfa</p>
</figure>

```html
<div
  class="background--gradient"
  style="
        --gradient-from: var(--green-30);
        --gradient-to: var(--green-40);
        --gradient-direction: to bottom;"
></div>
```

</article>
</div>
</Section>

<Section color="green-40">

###### Grid

### The grid explained

#### Partials

Stil works just with named partials. Just add the partial name to your column (in a row) and it will be the right width.

<Row class="gap--1 space--2 background--green border-radius--2">
<Column class="full space--2 border-radius--1 background--white">
    column
    full
</Column>
</Row>

<Row class="gap--2 space--2 background--green border-radius--2 space-top--3">
<Column class="half space--2 border-radius--1 background--white">
    column
    half
</Column>

<Column class="half space--2 border-radius--1 background--white">
    column
    half
</Column>
</Row>

<Row class="gap--2 space--2 background--green border-radius--2 space-top--3">

<Column class="third space--2 border-radius--1 background--white">
    column
    third
</Column>

<Column class="two-third space--2 border-radius--1 background--white">
    column
    two-third
</Column>

</Row>

<Row class="gap--2 space--2 background--green border-radius--2 space-top--3">

<Column class="quarter space--2 border-radius--1 background--white">
    column
    quarter
</Column>

<Column class="three-quarter space--2 border-radius--1 background--white">
    column
    three-quarter
</Column>

</Row>
<Row class="gap--2 space--2 background--green border-radius--2 space-top--3">

<Column class="quarter space--2 border-radius--1 background--white">
    column
    quarter
</Column>

<Column class="quarter space--2 border-radius--1 background--white">
    column
    quarter
</Column>

<Column class="quarter space--2 border-radius--1 background--white">
    column
    quarter
</Column>

<Column class="quarter space--2 border-radius--1 background--white">
    column
    quarter
</Column>

</Row>

</Section>

<Section color="green">

#### Responsive Partials

Try resizing your window and see how the blocks will go from third on a big screen, halfs on a medium screen and full on mobile.

<Row class="gap--2 space--2 background--white border-radius--2">

<Column class="small--full medium--half large--third space--2 border-radius--1 background--green-20">
    column
    small--full
    medium--half
    large--third
</Column>

<Column class="small--full medium--half large--third space--2 border-radius--1 background--green-30">
    column
    small--full
    medium-half
    large--third
</Column>

<Column class="small--full medium--half large--third space--2 border-radius--1 background--green-40">
    column
    small--full
    medium--half
    large--third
</Column>

</Row>

</Section>

<Section color="blue-20">

###### typography

### Headers

# The quick brown fox jumps over the lazy dog

    h1

## The quick brown fox jumps over the lazy dog

    h2

### The quick brown fox jumps over the lazy dog

    h3

#### The quick brown fox jumps over the lazy dog

    h4

##### The quick brown fox jumps over the lazy dog

    h5

###### The quick brown fox jumps over the lazy dog

    h6

<h1 class="font--light">The quick brown fox jumps over the lazy dog</h1>

    h1.font--light

<h2 class="font--light">The quick brown fox jumps over the lazy dog</h2>

    h2.font--light

<h3 class="font--light">The quick brown fox jumps over the lazy dog</h3>

    h3.font--light

<h4 class="font--light">The quick brown fox <strong>jumps</strong> over the lazy dog</h4>

    h4.font--light

<h5 class="font--light">The quick brown fox jumps over the lazy dog</h5>

    h5.font--light

<h6 class="font--light">The quick brown fox jumps over the lazy dog</h6>

    h6.font--light

</Section>

<Section color="blue-30">

<FontsTable :fonts="['sans-serif','serif','code','Helvetica','Avenir', 'Inter','Poppins','Raleway','Work Sans']" />

</Section>

<Section color="yellow-80">

###### Principles

Everyone has it's principles, so has **Stil**. Here's a brief overview of what Stil stands for..

#### Responsive

In a way we shouldn't have to mark this here, because it's a given. If you don't build your website to be able to use on all devices, you are doing something wrong. But yeah, **Stil** is fully ready to create your responsive projects.

#### Accessible

Everyone should be able to visit a website, with styling we can already do a lot to make this possible. **Stil** tries to enforce the users as much as possible to create accessible projects.

#### Customisable

No website is the same, thats why Stil is fully customatisable.

#### Understandable

Understandable in the sense that everyone who has a little bit of styling should understand it. It should be easily usable for a beginner and an advanced user.

#### Fun to use

With all the principles above in place, **Stil** should be fun to use. When it's easy and gives fast good looking results. It's becomes fun to use automatically.

</Section>

<Section color="yellow-70" >

###### customizability

## Every brand has it's own identity

<h4 class="font--normal" style="color: var(--negative)">Stil has it's opinions, but encourages you to have your own.</h4>

Stil is fully customisable, no two website should look the same. From the colors to the settings, sizes and all css outputs. Everything is customisable just defining some settings.

#### Colors

Stil comes with a set of colors which can be used by anybody. But if want to define your own colors, you can simple redefine the colors using custom properties. Or define a new colorset and generate all css using those colors.

<a href="/settings#colors" class="button">Settings for Colors</a>

#### Sizes

We defined a few sizes, for different screens, spacings, font-sizes, but if you don't agree with them, it's up to you to just redefine the sizes. No problem!

<a href="/settings#sizes" class="button">Settings for Sizes</a>

#### Naming

We have our preferences for naming, but we can imagine you do too. That's why we keep it fully open how you call your elements. We like to use rows and columns, but you like to use groups and cols? A button should be a btn? It's up to you

<a href="/settings#naming" class="button">Settings for Naming</a>

</Section>
