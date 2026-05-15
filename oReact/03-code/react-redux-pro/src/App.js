// react 组件使用 store 中的数据
// react 组件修改 store 中的数据
import { useSelector, useDispatch } from "react-redux";
// 导入 actionCreator
import { increment, decrement } from "./store/modules/counterStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
