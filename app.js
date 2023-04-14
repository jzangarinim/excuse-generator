let who = ["My dog", "My mom", "Uncle Steve", "A hobo", "Michael Jordan"];
let action = ["ate", "stole", "broke"];
let what = ["my homework", "my car", "my phone"];
let when = [
  "just 5 minutes ago",
  "yesterday",
  "earlier today",
  "during prayer",
];

window.onload = () => {
  let randNums = [];
  randNums[0] = Math.floor(Math.random() * who.length);
  randNums[1] = Math.floor(Math.random() * action.length);
  randNums[2] = Math.floor(Math.random() * what.length);
  randNums[3] = Math.floor(Math.random() * when.length);
  document.getElementById("excuse").innerHTML = `${who[randNums[0]]} ${
    action[randNums[1]]
  } ${what[randNums[2]]} ${when[randNums[3]]}!`;
};
