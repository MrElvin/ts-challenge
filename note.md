# 技巧记录

[TOC]

## T[number]

### [tuple-to-object](./easy/11-tuple-to-object.ts)

利用 `T[number]` 这个方式获取数组中每一项的值. 具体的语法见[官方文档](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

## 分布式条件类型

具体的语法见[官方文档](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)

### [exclude](./easy/43-exclude.ts)

利用条件类型的分配率来排除部分类型. `type MyExclude<T, U> = T extends U ? never : T;` 举个例子: `MyExclude<'a' | 'b' | 'c', 'a' | 'b'>` 这时会把 `T` 拆成: `'a', 'b', 'c'`. 其中前两个都返回了 `never` 被排除, 最后的 `c` 被保留.

### [permutation](./medium/296-permutation.ts)

利用分布式条件类型的特性完成功能.

## 通过 as 来给 key 取别名

具体语法见 [key remapping via as](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)

### [omit](./medium/3-omit.ts)

利用取别名的方式将对象中不满足要求的键名转换为 `never` 类型, 以达到过滤的目的.

## 泛型的默认值

### [readonly 2](./medium/8-readonly2.ts)

利用 `<T, K extends keyof T = keyof T>` 给泛型参数 `K` 赋予默认值.

## 字面量类型的技巧

### [trim left](./medium/106-trim-left.ts)

利用字面量和类型推导, 完成了 trimLeft 效果.

### [absolute](./medium/529-absolute.ts)

用 `${}` 的方式将其他类型转为字面量类型.

```typescript
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`
```

## & 与 | 的区别

### [diff](./medium/645-diff.ts)

利用 & 与 | 的区别可以更加优雅地实现 diff 方法.
