// 项目的根组件
// APP --> index.js --> public/index.html(root)

// 1、jsx基础 -- 识别js表达式
const count = 100;

function getName() {
  return "jack";
}

// 2、jsx基础 -- 实现列表渲染
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      this is App
      {/* jsx基础 -- 识别js表达式 */}
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
      {/* 2、jsx基础 -- 实现列表渲染 */}
      {/* 渲染列表 */}
      {/* map 循环哪个结构 return 哪个结构 */}
      {/* 注意事项：加上一个独一无二的key string | number */}
      {/* key的作用：React框架内部使用 提升更新性能的 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
