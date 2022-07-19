class Giftexchange {
  static pairs(names) {
    const isodd = names.length % 2 === 1;
    if (isodd) console.log("BadRequestError, isodd");
    const pairs = [];
    while (names.length > 0) {
      const randomFirstNumber = Math.floor(Math.random() * names.length);
      const firstName = names.splice(names.length, 1);

      const randomSecondNumber = Math.floor(Math.random() * names.length);
      const secondName = names.splice(names.length, 1);

      pairs.push([firstName, secondName]);
    }
    return pairs;
  }

  static traditional(names) {
    const isRandom = names.length % 2 === 1;
    if (isRandom) console.log("BadRequestError, isRandom");
    const traditional = [""];
    while (names.length > 0) {
      const randomFirstNumber = Math.floor(Math.random() * names.length);
      const firstName = names.splice(names.length, 1);

      const randomSecondNumber = Math.floor(Math.random() * names.length);
      const secondName = names.splice(names.length, 1);

      traditional.push("name1 is giving a gift to name2");
    }
    return traditional;
  }
}
