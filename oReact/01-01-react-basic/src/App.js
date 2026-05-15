// 项目的根组件
// APP --> index.js --> public/index.html(root)

/* 7.2 导入 useState */
import { useState } from "react";

/* 9.2.2、导入样式 */
import "./index.css";

/* 1、jsx基础 -- 识别js表达式 */
// const count = 100;

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

/* 6、React组件的基础使用 */
// function Button() {
//   // 业务逻辑组件逻辑
//   return <button>click me</button>
// }

const Button = () => {
  // 业务逻辑组件逻辑
  return <button>click me</button>;
};

/* 7、useState 实现一个计数器按钮 */

/* 9.1、行内样式控制 */
const style = {
  color: "red",
  fontSize: "50px",
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
  // function handleClick(name, e) {
  //   console.log("button clicked", name, e)
  // }

  /* 7.1 调用 useState 添加一个状态变量 */
  // count 状态变量
  // setCount 修改状态变量的方法
  const [count, setCount] = useState(0);

  /* 7.2 点击事件回调 */
  const handleClick = () => {
    // 作用：1、用传入的新值修改count
    // 2、重新使用新的count渲染UI
    /* 8.1、useState 修改状态的规则 */
    // 直接修改 无法引发视图更新
    // count++;
    // console.log(count);
    setCount(count + 1);
  };

  /* 8.2、修改对象状态 */
  const [form, setForm] = useState({ name: "jack" });

  const changeName = () => {
    // 错误写法：直接修改
    // form.name = 'john';
    // 正确写法：setForm 传入一个全新的对象
    setForm({
      ...form,
      name: "john",
    });
  };
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
      <h3>5、React中的事件绑定</h3>
      {/* <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={() => handleClick("jack")}>click me</button> */}
      <button onClick={(e) => handleClick("jack", e)}>click me</button>
      <h3>6、React组件的基础使用</h3>
      {/* 使用组件，(渲染组件) */}
      {/* 自闭和标签 */}
      <Button />
      {/* 成对标签 */}
      <Button>click me</Button>
      <h3>7、useState 实现一个计数器按钮</h3>
      <button onClick={handleClick}>{count}</button>
      <h3>8、修改对象状态</h3>
      <button onClick={changeName}>修改form{form.name}</button>
      <h3>9、组件样式方案</h3>
      {/* 9.1、行内样式控制 */}
      <span style={{ color: "red", fontSize: '50px' }}>this is span</span>
      <span style={style}>this is span</span>
      {/* 9.2.1、通过class类名控制 */}
      <span className="foo">this is class foo</span>
    </div>
  );
}

export default App;
