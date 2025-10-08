
 */ @param {string} str El valor en formato string que queremos interpretar.
 */@return {boolean|number|string} El valor interpretado en su tipo correcto.
 
function parseValue(str) {
  if (typeof str !== "string") {
    return str;
  }
  
  const lower = str.trim().toLowerCase();

  if (lower === "true") {
    return true;
  }
  if (lower === "false") {
    return false;
  }

  const intRegex = /^[-+]?\d+$/;
  if (intRegex.test(lower)) {
    const num = parseInt(lower, 10);
    return num;
  }

  return str;
}

console.log(parseValue("   true   "));    // → true (booleano)
console.log(parseValue("FALSE"));          // → false
console.log(parseValue("12345"));          // → 12345 (número)
console.log(parseValue("-42"));             // → -42 (número)
console.log(parseValue("007"));             // → 7  (número)
console.log(parseValue("3.14"));            // → "3.14" (cadena, ya que no es entero)
console.log(parseValue("Hola mundo"));      // → "Hola mundo"
