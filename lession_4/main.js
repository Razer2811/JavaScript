var fullName = "Minh Khanhs la 'sieu nhan'"
console.log(fullName)

// Template String 
var firstName = "Minh"
var lastName = "Khanh"
console.log(`Toi la : ${firstName} ${lastName}`)

// Làm việc với chuỗi

var myString = "  Toi la JS dang hoc JS JavaScript     "
// 1. Length
console.log(myString.length)
// 2. Find index
console.log(myString.indexOf("JS", 8))
console.log(myString.lastIndexOf("JS"))

// 3. Cut String
console.log(myString.slice(7,9))
console.log(myString.slice(7))

// 4. Replace
console.log(myString.replace("JS", "javascript"))
console.log(myString.replace(/JS/g, "javascript"))

// 5. Convert to Upper Case
console.log(myString.toUpperCase())

// 6. Convert to Lower Case
console.log(myString.toLowerCase())

// 7. Trim
console.log(myString.trim())

// 8. Split
var languages = "js, php, ruby"

console.log(languages.split(', '))

var languages2 = "javascript"

console.log(languages2.split(''))

// 9. Get a character 
const myString2 = "Minh Khanh"
console.log(typeof(myString2.charAt(10)))
