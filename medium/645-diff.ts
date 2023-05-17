/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  获取两个接口类型中的差值属性。

  ```ts
  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

  ```

  > 在 Github 上查看：https://tsch.js.org/645/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Diff<O, O1> = {
    [
        key in keyof O | keyof O1 as key extends keyof O
            ? key extends keyof O1 ? never : key
            : key
    ]: key extends keyof O ? O[key] : key extends keyof O1 ? O1[key] : never;
}

// 更优雅的写法  & means 'either has', | means 'both have'
type Diff1<O, O1> = {
    [K in keyof (O & O1) as K extends keyof (O | O1) ? never : K]: (O & O1)[K];
};

// 使用 build-in 的写法
type Diff2<O, O1> = Omit<O & O1, keyof (O | O1)>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
    name: string
    age: string
}
type Bar = {
    name: string
    age: string
    gender: number
}

type Coo = {
    name: string
    gender: number
}

type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/645/answer/zh-CN
  > 查看解答：https://tsch.js.org/645/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
