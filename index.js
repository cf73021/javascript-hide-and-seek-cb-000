function getFirstSelector(selector) {
  var selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = (i + 1).toString();
  }
}

function deepestChild(){
   var deepest = document.querySelector('#grand-node')
  for (let i = 0; i < deepest.length; i++){
    var next_deepest = document.querySelectorAll()
  }
}
