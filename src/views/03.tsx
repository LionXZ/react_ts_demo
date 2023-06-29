import { useCallback, useMemo, useState } from "react";

export default function There() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //缓存  优化
  const onchange = useCallback(
    (evt: any) => {
      setText(evt.target.value);
    },
    [text]
  );

  //useCallback
  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  //useMemo useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并且将函数执行结果返回给你
  const add1 = useMemo(
    () => () => {
      setCount(count + 1);
    },
    [count]
  );
  //类似于计算属性
  const text2 = useMemo(() => text.toUpperCase(), [text]);

  return (
    <div>
      <div>{count}</div>
      <input onChange={onchange} value={text} />
      <div>{text}</div>
      <div>{text2}</div>
      <button onClick={add1}>setCount</button>
    </div>
  );
}
