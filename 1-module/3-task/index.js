function ucFirst(str) {
  let str1 = str;
  let target = 'В';
  let pos = 0;
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1;
  }
  if (!str1) return str1;
  return str1[0].toUpperCase() + str1.slice(1);

}

// console.log(ucFirst('ваВя'));



