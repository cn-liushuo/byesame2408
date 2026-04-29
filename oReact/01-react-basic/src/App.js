// 项目的根组件
// APP --> index.js --> public/index.html(root)

/* 1、jsx基础 -- 识别js表达式 */
const count = 100;

function getName() {
  return "jack";
}

/* 2、jsx基础 -- 实现列表渲染 */
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];

/* 3、jsx基础 -- 实现基础条件渲染 */
const isLogin = true;

/* 4、jsx基础 -- 实现复杂条件渲染 */
// 定义文章类型
const articleType = 1; // 0 1 3

// 定义核心函数(根据文章类型返回不同的JSX模板)
function getArticleTemplate() {
  if (articleType === 0) {
    return <div>我是无图文章</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}
function App() {
  /* 5、React中的事件绑定 -- 基础绑定 */
  // function handleClick() {
  //   console.log("button clicked")
  // }

  // 事件参数e
  // function handleClick(e) {
  //   console.log("button clicked", e)
  // }

  // 传递自定义参数
  // function handleClick(name) {
  //   console.log("button clicked", name)
  // }

  // 既要传递自定义参数，而且还要事件对象e
  function handleClick(name, e) {
    console.log("button clicked", name, e)
  }
  return (
    <div className="App">
      this is App
      <h3>1、jsx基础 -- 识别js表达式</h3>
      {/* 使用引号传递字符串 */}
      {"this is a message"}
      {/* 识别JS变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: "red" }}>this is div</div>
      <h3>2、jsx基础 -- 实现列表渲染</h3>
      {/* 渲染列表 */}
      {/* map 循环哪个结构 return 哪个结构 */}
      {/* 注意事项：加上一个独一无二的key string | number */}
      {/* key的作用：React框架内部使用 提升更新性能的 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h3>3、jsx基础 -- 实现基础条件渲染</h3>
      {/* 逻辑与 && */}
      {isLogin && <span>this is span</span>}
      {/* 三元运算 */}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
      <h3>4、jsx基础 -- 实现复杂条件渲染</h3>
      {/* 调用函数渲染不同的模板 */}
      {getArticleTemplate()}
      {/* 5、React中的事件绑定 */}
      {/* <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={() => handleClick("jack")}>click me</button> */}
      <button onClick={(e) => handleClick("jack", e)}>click me</button>
    </div>
  );
}

export default App;
