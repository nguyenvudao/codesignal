// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong
// (the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const newArr = [yourLeft, yourRight, friendsLeft, friendsRight];
  //   newArr.push(yourLeft, yourRight, friendsLeft, friendsRight);
  // eslint-disable-next-line max-len
  return [...new Set(newArr)].length <= 2 && (yourLeft === friendsLeft || yourLeft === friendsRight);
}

const yourLeft = 10;
const yourRight = 15;
const friendsLeft = 15;
const friendsRight = 10;
console.log(areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight));