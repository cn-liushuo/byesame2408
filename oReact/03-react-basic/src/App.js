// 1、受控绑定表单
import { useState, useRef } from "react";

// 1.1、声明一个 react 状态 - useState

// 1.2、核心绑定流程
// 1.2.1、通过 value 属性绑定 react 状态
// 1.2.2、绑定 onChange 事件 通过事件参数 e 拿到输入框最新的值 反向修改到 react 状态身上

// 2、React 中获取 DOM

// 2.1、useRef 生成 ref 对象 绑定到 DOM 标签身上

// 2.2、DOM 可用时，ref.current 获取 DOM
// 渲染完毕之后 DOM 生成之后才可用
const App = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const showDom = () => {
    console.dir(inputRef.current);
  };
  return (
    <>
      <h4>受控绑定表单</h4>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      ></input>
      <h4>React 中获取 DOM</h4>
      <input ref={inputRef} type="text"></input>
      <button onClick={showDom}>获取 DOM</button>
    </>
  );
};

export default App;
