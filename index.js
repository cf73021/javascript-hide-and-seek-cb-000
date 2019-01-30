function getFirstSelector(selector) {
  selected = document.querySelector(selector)
  return selected
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = (i + 1).toString();
  }
}

function deepestChild(){
  deepest = document.querySelector('#grand-node')
  for (let i = 0; i < deepest.length; i++){
    next_deepest = document.querySelectorAll()
  }
}
