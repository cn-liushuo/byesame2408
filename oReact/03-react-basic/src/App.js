//1、受控绑定表单
import { useState } from "react";

// 1.1、声明一个 react 状态 - useState

// 1.2、核心绑定流程
// 1.2.1、通过 value 属性绑定 react 状态
// 1.2.2、绑定 onChange 事件 通过事件参数 e 拿到输入框最新的值 反向修改到 react 状态身上
const App = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      ></input>
    </>
  );
};

export default App;
