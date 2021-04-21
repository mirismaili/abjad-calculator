# Abjad-Calculator

## Installation

```bash
npm i abjad
```

or:

```bash
yarn add abjad
```

## Usage

```javascript
import calculateAbjadCode, {intToFa} from 'abjad'

const num = calculateAbjadCode(input.value)
const numFa = isNaN(num) ? '؟' : intToFa(num)

console.log({num, numFa})
```

## Example:

[![ماشین حساب ابجد (آنلاین/آفلاین)](https://raw.githubusercontent.com/mirismaili/abjad-calculator/main/res/sample.png)](https://mirismaili.github.io/abjad-calculator)

https://mirismaili.github.io/abjad-calculator

*See [index.html](https://github.com/mirismaili/abjad-calculator/blob/main/index.html).*
