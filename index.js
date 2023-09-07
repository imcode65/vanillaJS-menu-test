const MENUARR = {
  '<a href="#" style="cursor: pointer">parent1</a>': [
    '<a href="#" style="cursor: pointer">child1</a>',
    '<a href="#" style="cursor: pointer">child2</a>',
    '<a href="#" style="cursor: pointer">child3</a>',
    '<a href="#" style="cursor: pointer">child4</a>',
    '<a href="#" style="cursor: pointer">child5</a>',
  ],
  '<a href="#" style="cursor: pointer">parent2</a>': [
    '<a href="#" style="cursor: pointer">child1</a>',
    '<a href="#" style="cursor: pointer">child2</a>',
    '<a href="#" style="cursor: pointer">child3</a>',
    '<a href="#" style="cursor: pointer">child4</a>',
    '<a href="#" style="cursor: pointer">child5</a>',
  ],
  '<a href="#" style="cursor: pointer">parent3</a>': [
    '<a href="#" style="cursor: pointer">child1</a>',
    '<a href="#" style="cursor: pointer">child2</a>',
    '<a href="#" style="cursor: pointer">child3</a>',
    '<a href="#" style="cursor: pointer">child4</a>',
    '<a href="#" style="cursor: pointer">child5</a>',
  ],
  '<a href="#" style="cursor: pointer">parent4</a>': [
    '<a href="#" style="cursor: pointer">child1</a>',
    '<a href="#" style="cursor: pointer">child2</a>',
    '<a href="#" style="cursor: pointer">child3</a>',
    '<a href="#" style="cursor: pointer">child4</a>',
    '<a href="#" style="cursor: pointer">child5</a>',
  ],
  '<a href="#" style="cursor: pointer">parent5</a>': [
    '<a href="#" style="cursor: pointer">child1</a>',
    '<a href="#" style="cursor: pointer">child2</a>',
    '<a href="#" style="cursor: pointer">child3</a>',
    '<a href="#" style="cursor: pointer">child4</a>',
    '<a href="#" style="cursor: pointer">child5</a>',
  ],
};
const PMH = 24;
let htmlEl;
function removeKeyOfMenuArr(arr, removedArr) {
  const newArr = {};
  for (const _key of Object.keys(arr).slice(0, -1)) {
    newArr[_key] = arr[_key];
  }
  const lastKey = Object.keys(arr).slice(-1)[0];
  if (lastKey) {
    removedArr[lastKey] = arr[lastKey];
  }
  return [newArr, removedArr];
}
function displayMenu(arr, _removedArr = {}) {
  if (htmlEl) {
    let resHtml = "";
    resHtml += `<div style="display: flex; flex-wrap: wrap;">`;
    for (const parentMenu of Object.keys(arr)) {
      resHtml += `<div class="main-menu" style="height: 24px; position: relative; margin-right: 20px;">`;
      resHtml += parentMenu;
      resHtml += `<div class="sub-menu" style="position: absolute; right: 0; top: 30px; display: flex; flex-direction: column;">`;
      for (const childMenu of arr[parentMenu]) {
        resHtml += childMenu;
      }
      resHtml += `</div>`;
      resHtml += `</div>`;
    }
    resHtml += "</div>";
    resHtml += `<div class="main-menu" style="display: flex; justify-content: end; flex-grow: 1; flex-shrink: 1; position: relatve;">`;
    resHtml += `<span style="cursor: pointer">All Category</span>`;
    resHtml += `<div class="sub-menu" style="position: absolute; right: 0; top: 30px; display: flex; flex-direction: column;">`;
    for (const childMenuTitle of Object.keys(_removedArr).reverse()) {
      resHtml += `<span>${childMenuTitle}</span>`;
    }
    resHtml += `</div>`;
    resHtml += `</div>`;
    htmlEl.innerHTML = resHtml;
    if (htmlEl.offsetHeight > 24) {
      const [newArr, removedArr] = removeKeyOfMenuArr(arr, _removedArr);
      displayMenu(newArr, removedArr);
    }
  }
}

window.addEventListener("resize", (ev) => {
  displayMenu(MENUARR);
});

document.addEventListener("DOMContentLoaded", () => {
  htmlEl = document.getElementById("menu");
  displayMenu(MENUARR);
});
