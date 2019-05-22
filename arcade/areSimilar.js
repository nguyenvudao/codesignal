/**
 *
 * Two arrays are called similar if one can be obtained from another
 * by swapping at most one pair of elements in one of the arrays.
 * Given two arrays a and b, check whether they are similar.
 *
 */
const areSimilar = (a, b) => {
  const aUnique = a.filter((v, i) => v !== b[i]);
  const bUnique = b.filter((v, i) => v !== a[i]);
  return aUnique.length === 0 || (aUnique.length === 2 && aUnique.join('') === bUnique.reverse().join(''));
};


const a = [1, 2, 2];
const b = [1, 1, 2];
console.log(areSimilar(a, b));
// areSimilar(a, b);