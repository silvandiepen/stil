<Section color="purple-80">

### Utility classes

</Section>

<Section color="purple-90">

### Border

| Class                        | Code                                              | Description                              |
| ---------------------------- | ------------------------------------------------- | ---------------------------------------- |
| `.border`                    | `border: 1px solid currentColor`                  | Basic 1px border using the current Color |
| `.border--solid`             | `border-style: solid`                             |                                          |
| `.border--dotted`            | `border-style: dotted`                            |                                          |
| `.border--dashed`            | `border-style: dashed`                            |                                          |
| `.border--*`                 | `border-style: solid; border-color: currentColor` | Sets the default solid and currentColor  |
| `.border--1` to `border--10` | `border-width: calc(var(--spacing / 20) * i)`     |                                          |

</Section>

<Section color="purple-80">

### Border Radius

| Class                                      | Code                                           | Description                            |
| ------------------------------------------ | ---------------------------------------------- | -------------------------------------- |
| `.border-radius`                           | `border-radius: var(--border-radius)`          | Uses the default defined border-radius |
| `.border-radius--1` to `border-radius--10` | `border-radius: calc(var(--spacing / 20) * i)` |                                        |

</Section>

<Section color="green-90">

### Opacity

| Class                          | Code                | Description |
| ------------------------------ | ------------------- | ----------- |
| `.opacity--1` to `opacity--10` | `opacity: 0.1 to 1` |             |

</Section>

<Section color="green-70">

### Space

| Class                           | Code                               | Description |
| ------------------------------- | ---------------------------------- | ----------- |
| `.space--1` to `.space--10`     | `padding: ((space() / 5) * $i)`    |             |
| `.space-top--1` to `.space--10` | `margin-top: ((space() / 5) * $i)` |             |

</Section>

<Section color="green-60">

### Size

| Class                         | Code                           | Description |
| ----------------------------- | ------------------------------ | ----------- |
| `.width--1` to `.width--10`   | `width: ((space() / 5) * $i)`  |             |
| `.height--1` to `.height--10` | `height: ((space() / 5) * $i)` |             |

</Section>

<Section color="green-50">

### Gap

| Class                   | Code                                                                                     | Description |
| ----------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| `.gap--1` to `.gap--10` | `--gap: ((space() / 5) * $i); gap: var(--gap); width: calc(100% + (var(--gap) * 0.625))` |             |

</Section>

<Section color="yellow-90">

### Font

| Class                               | Code                            | Description |
| ----------------------------------- | ------------------------------- | ----------- |
| `.font-size--1` to `.font-size--10` | `font-size: (space(0.2) * $i);` |             |

</Section>

<Section color="yellow-80">

### Font Weights

| Class         | Code                | Description |
| ------------- | ------------------- | ----------- |
| `.font-light` | `font-weight: 200;` |             |

</Section>
