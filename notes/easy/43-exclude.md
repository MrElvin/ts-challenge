# exclude 题解

[题目链接](../../easy/43-exclude.ts)

```ts
// 实现
type MyExclude<T, U> = T extends U ? never : T;

// 测试
type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
```

## 解释

本题应用的是 TS 中的 [分布式条件类型](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types) 这一特性. 该特性会把条件类型中的联合类型分别进行判断处理, 最后再将每一项处理的值联合起来, 作为最终的返回值.

以 `MyExclude<'a' | 'b' | 'c', 'a' | 'b'>` 为例, 进行说明:

```ts
MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
-> MyExclude<'a', 'a' | 'b'> | MyExclude<'b', 'a' | 'b'> | MyExclude<'c', 'a' | 'b'>
-> ('a' extends 'a' | 'b' ? never : 'a') | ('b' extends 'a' | 'b' ? never : 'b') | ('c' extends 'a' | 'b' ? never : 'c')
-> never | never | 'c'
-> 'c'
```
