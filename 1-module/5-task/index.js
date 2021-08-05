function truncate(str, maxlength) {
  if (str.length == maxlength) {
    return str;
  }
  let result = str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
  return result;
}
console.log(truncate('привет мир', 10));