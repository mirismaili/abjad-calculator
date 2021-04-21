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
import calculateAbjadCode, { intToFa } from 'abjad'

const num = calculateAbjadCode(input.value)
const numFa = isNaN(num) ? '؟' : intToFa(num)

console.log({
	num,
	numFa
})
```

## Example:

https://mirismaili.github.io/abjad-calculator
