const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
   const newCats = [...cats, (name)];
   return newCats;
}
function prependCat(name) {
    const newCats2 = [(name), ...cats];
    return newCats2;
}
function removeLastCat() {
    const newCats3 = [...cats.slice(0, -1)];
    return newCats3;
}
function removeFirstCat() {
    const newCats4 = [...cats.slice(1)];
    return newCats4;
}