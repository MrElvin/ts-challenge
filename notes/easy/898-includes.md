# includes 题解

[题目链接](../../easy/898-includes.ts)

```ts
// 实现
type IsEqual<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly unknown[], U> =
    T extends [infer First, ...infer Rest]
        ? IsEqual<First, U> extends true
            ? true
            : Includes<Rest, U>
        : false;

// 测试
type cases = [
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
    Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
    Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
    Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[1], 1 | 2>, false>>,
    Expect<Equal<Includes<[1 | 2], 1>, false>>,
    Expect<Equal<Includes<[null], undefined>, false>>,
    Expect<Equal<Includes<[undefined], null>, false>>,
]
```

## 解释

思路比较简单, 就是遍历每一项数组的内容, 判断类型是否和给定的类型相同. 但如何判断类型相同, 这里的 `IsEqual` 用到了技巧.

1. 遍历数组, 利用类型推断 + 递归的方式处理
2. `IsEqual` 借鉴了这个 [ts issue](https://github.com/microsoft/TypeScript/issues/27024). 这个技巧涉及到了源码的处理方式, 比较晦涩, 暂时不深入追究了, 官方没有提供 `Equal` 工具类型之前, 可以用题解的 `IsEqual` 方法来代替.
