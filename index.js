function getFirstSelector(selector) {
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = (i + 1).toString();
  }
}

function deepestChild() {
  let farthest_Child = document.getElementById('grand-node').querySelectorAll('div')
  return farthest_Child[farthest_Child.length - 1]
}
