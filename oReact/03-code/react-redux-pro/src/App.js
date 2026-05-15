// react 组件使用 store 中的数据
// react 组件修改 store 中的数据
import { useSelector, useDispatch } from "react-redux";
// 导入 actionCreator
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  // 使用 useEffect 触发异步请求执行
  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add To 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add To 20</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
