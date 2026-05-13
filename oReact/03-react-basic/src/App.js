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

// 3、父传子
// 3.1、父组件传递数据 子组件标签身上绑定属性
// 3.2、子组件接受数据 props 的参数
function Son(props) {
  // props: 对象里面包含了父组件传递过来的所有数据
  // { name: '父组件中的数据' }
  console.log(props);
  return (
    <>
      <div>
        this is son, {props.name}, jsx: {props.child}
      </div>
    </>
  );
}

// 4、父传子 -- children
function Son2(props) {
  console.log("[Son2] props: ", props);
  return (
    <>
      <div>this is son2, {props.children}</div>
    </>
  );
}

// 5、父子组件通信 -- 子传父
// 核心：在子组件中调用父组件中的函数并传递实参

function Son3({ onGetSonMsg }) {
  // son3 组件中的数据
  const son3Msg = "this is son3 msg";
  return (
    <>
      <div>
        this is Son
        <button onClick={() => onGetSonMsg(son3Msg)}>sendMsg</button>
      </div>
    </>
  );
}

const App = () => {
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState("");
  const inputRef = useRef(null);
  const showDom = () => {
    console.dir(inputRef.current);
  };
  const name = "this is app name";
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
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
      <h4>父传子</h4>
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={["vue", "react"]}
        obj={{ name: "jack" }}
        cb={() => console.log(123)}
        child={<span>this is span</span>}
      />
      <h4>父传子 -- children</h4>
      <Son2>
        <span>this is span</span>
      </Son2>
      <h4>父子组件通信 -- 子传父</h4>
      <div>
        this is App, {msg}
        <Son3 onGetSonMsg={getMsg} />
      </div>
    </>
  );
};

export default App;
