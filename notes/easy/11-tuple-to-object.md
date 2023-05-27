# tuple to object 题解

[题目链接](../../easy/11-tuple-to-object.ts)

```ts
// 实现
type TupleToObject<T extends readonly (string | number)[]> = {
    [U in T[number]]: U;
}

// 测试
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
    Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
    Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
```

## 解释

1. `T[number]` 表示数组或元组的所有项组成的联合类型.
2. 另外 `as const` 这个写法, 可以将一个数组就地转换为只读的元组类型. 所以在解题实现时, 泛型变量 `T` 需要满足 `readonly` 只读态.
