# 技巧记录

1. T[number]

[tuple-to-object](./easy/11-tuple-to-object.ts) 中利用 `T[number]` 这个方式获取数组中每一项的值. 具体的语法见[官方文档](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

2. 条件类型的分配律 Distributive Conditional Types

[exclude](./easy/43-exclude.ts) 中利用条件类型的分配率来排除部分类型. `type MyExclude<T, U> = T extends U ? never : T;` 举个例子: `MyExclude<'a' | 'b' | 'c', 'a' | 'b'>` 这时会把 `T` 拆成: `'a', 'b', 'c'`. 其中前两个都返回了 `never` 被排除, 最后的 `c` 被保留.

具体的语法见[官方文档](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)

3. 通过 as 来给 key 取别名

[omit](./medium/3-omit.ts) 中利用 [key remapping via as](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as) 来将对象中不满足要求的键名转换为 `never` 类型, 以达到过滤的目的.

4. 泛型的默认值

[readonly 2](./medium/8-readonly2.ts) 中利用 `<T, K extends keyof T = keyof T>` 给泛型参数 `K` 赋予默认值.
