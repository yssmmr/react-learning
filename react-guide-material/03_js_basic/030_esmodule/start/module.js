export const hello = () => {
  console.log("hello!");
};

//export→外部からアクセス可能な変数に

const funcB = () => {
  console.log("funcB output");
};

export default funcB;
//defaultでimportできるように。ファイルに一つだけ。

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

export { User }
