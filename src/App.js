import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  //useSelectorの実態はstateの中身を対象のキーで抽出する関数
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  //実態としてはstore.dispatchが返っている
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>
      <h3>カウント：{counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogin ? <h3>ログインに成功！</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>ログインする</button>
    </div>
  );
}

export default App;
