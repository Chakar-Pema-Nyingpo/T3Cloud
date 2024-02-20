function countVowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if ("aeiou".includes(str[i])) {
        count = count + 1;
      }
    }
    const plural = count > 1 ? "s" : "";
    return "it contain " + count + " vowel" + plural;
  }
  console.log(countVowels("a"));