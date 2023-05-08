// 1) introduction(name)
//        takes in an argument of a name and returns a phrase with that name using string interpolation:
//      ReferenceError: introduction is not defined
//       at Context.<anonymous> (test/indexTest.js:6:5)
//       at processImmediate (node:internal/timers:466:21)

function introduction(name) {
  return `Hi, my name is ${name}.`;
}
//   2) introductionWithLanguage(name, language)
//        takes in two arguments, a name and a language, and returns a phrase using those arguments:
//      ReferenceError: introductionWithLanguage is not defined
//       at Context.<anonymous> (test/indexTest.js:13:5)
//       at processImmediate (node:internal/timers:466:21)
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//   3) introductionWithLanguageOptional(name, language)
//        takes in two arguments, a name and a language, and language defaults to JavaScript:
//      ReferenceError: introductionWithLanguageOptional is not defined
//       at Context.<anonymous> (test/indexTest.js:20:5)
//       at processImmediate (node:internal/timers:466:21)
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
//   4) introductionWithLanguageOptional(name, language)
//        takes in two arguments, a name and a language, and the default value can be overridden with an argument:
//      ReferenceError: introductionWithLanguageOptional is not defined
//       at Context.<anonymous> (test/indexTest.js:26:5)
//       at processImmediate (node:internal/timers:466:21)
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
