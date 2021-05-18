# Abjad-Calculator

> محاسبه‌گر شمارگان حروف أبجد (حساب جُمَّل) برای واژگان و عبارت‌ها

[![npm (scoped)](https://img.shields.io/npm/v/abjad.svg)](https://npmjs.com/package/abjad)
[![install size](https://packagephobia.now.sh/badge?p=abjad)](https://packagephobia.now.sh/result?p=abjad)
[![downloads](https://img.shields.io/npm/dt/abjad.svg)](https://npmjs.com/package/abjad) <br>
[![dependencies](https://david-dm.org/mirismaili/abjad-calculator.svg)](https://david-dm.org/mirismaili/abjad-calculator)
[![devDependencies](https://david-dm.org/mirismaili/abjad-calculator/dev-status.svg)](https://david-dm.org/mirismaili/abjad-calculator?type=dev) <br>
[![license](https://img.shields.io/github/license/mirismaili/abjad-calculator.svg)](https://github.com/mirismaili/abjad-calculator/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/mirismaili/abjad-calculator.svg?style=social)](https://github.com/mirismaili/abjad-calculator/fork)
[![Stars](https://img.shields.io/github/stars/mirismaili/abjad-calculator.svg?style=social)](https://github.com/mirismaili/abjad-calculator)

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

- Live: https://mirismaili.github.io/abjad-calculator

- Source: [index.html](https://github.com/mirismaili/abjad-calculator/blob/main/index.html)
