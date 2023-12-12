const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent)

h1Element.textContent = "変更後のタイトル"

const buttonEl = document.querySelector("button");

const helloFn = (event) => {
  console.dir(event.target.textContent);
  console.log("hello");
};

//console.dir=>オブジェクトの形式で見たい場合。

buttonEl.addEventListener("click", helloFn); 