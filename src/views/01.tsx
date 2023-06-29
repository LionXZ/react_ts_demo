import { Children, useEffect, useLayoutEffect, useState } from "react";
import kerwinPropTypes from "prop-types";

//属性
One.prototype = {
  name: kerwinPropTypes.string,
};
One.defaultProps = {
  name: "1111",
};
export default function One(props: any) {
  const { name, children } = props;
  const [count, setCount] = useState(0);
  const [len, setLen] = useState(3);

  useEffect(() => {
    //axios请求
    setLen(count + len);

    return () => {
      //组件销毁执行
      console.log("组件第一次执行/销毁执行1");
    };
  }, [count]); //第一次执行 依赖更新也会执行
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("111");
    }, 1000);
    return () => {
      //组件销毁执行
      console.log("组件第一次执行/销毁执行2");
      clearInterval(timer);
    };
  }, []);

  useLayoutEffect(() => {
    //操作DOM建议使用
    console.log("useLayoutEffect1");
  }, []);

  return (
    <div>
      {count}
      <div>{len}</div>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}
