// noinspection NonAsciiCharacters
/**
 * Created on 1400/2/1 (2021/4/21).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

export const lettersValuesMap = {
	ا: 1,
	آ: 1,
	أ: 1,
	إ: 1,
	ء: 1,
	ٱ: 1,
	ب: 2,
	پ: 2,
	ج: 3,
	چ: 3,
	د: 4,
	ه: 5,
	ۂ: 5,
	و: 6,
	ؤ: 6,
	ز: 7,
	ژ: 7,
	ح: 8,
	ط: 9,
	ی: 10,
	ي: 10,
	ئ: 10,
	ى: 10,
	ک: 20,
	ك: 20,
	گ: 20,
	ل: 30,
	م: 40,
	ن: 50,
	س: 60,
	ع: 70,
	ف: 80,
	ص: 90,
	ق: 100,
	ر: 200,
	ش: 300,
	ت: 400,
	ة: 400,
	ث: 500,
	خ: 600,
	ذ: 700,
	ض: 800,
	ظ: 900,
	غ: 1000,
}

export const calculateAbjadCode = phrase => {
	const filteredPhrase = phrase.replaceAll(/[.,/#!$%^&*;:{}=\-_`~()\s]/g, '')  // https://stackoverflow.com/a/4328722/5318303
	let result = 0
	for (const ch of filteredPhrase) {
		const chCode = ch.charCodeAt(0)
		if (chCode < 0x600 || chCode > 0x8FF) {  // Any non-{Persian/Arabic} character
			console.debug({filteredPhrase})
			return NaN
		}
		
		result += lettersValuesMap[ch] ?? 0
	}
	
	console.debug({filteredPhrase, result})
	return result
}

export default calculateAbjadCode

export const intToFa = (() => {
	const enDigitToFaDifference = '۰'.charCodeAt(0) - '0'.charCodeAt(0)
	const enDigitToFa = d => String.fromCharCode(d.charCodeAt(0) + enDigitToFaDifference)
	
	return num => [...String(num)].map(enDigitToFa).join('')
})()
