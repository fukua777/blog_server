---
title: About　Ts
categories: 甫夸之谈———JS
tags: "typescript"
date: 2018-02-25
---

> 关于

　　Typescript是JavaScript类型的超集，可以编译成JavaScript。
> 主要

## 　基础类型

  *  <b>布尔值</b>
  *  <b>数字</b>
  *  <b>字符串</b>
  *  <b>数组</b>
```
    let list: number[] = [1,2,3];
    let list: Array<number> = [1,2,3];
```

  *  <b>元组</b>　<small>允许表示一个一直元素数量和类型的数组，类型可任意。访问已知索引的元素，类型必须匹配；访问越界的元素，类型需是联合类型，即已知类型的并集。</small>
  <!-- more -->
  *  <b>枚举</b>　<small>enum类型是对JavaScript标准数据类型的一个补充，可以为一组数值赋予友好的名字，默认元素从0开始编号，可指定。</small>
  *  <b>Any</b>　<small>对不清楚的变量指定类型，可以避过类型检查，Object也能起到同样作用，但any类型数据可以调用任意方法，Object则不可以。</small>
  *  <b>Void</b>　<small>与Any类型相反，表示没有任何类型，函数没有返回值时，返回值类型可以为Void；声明Void类型变量没有实际用处，只能赋值undefined和null。</small>
  *  <b>Null和Undefined</b>　<small>JavaScript中null和undefined在Ts中分别有类型null和undefined；Null和Undefined是所有类型的子类型。</small>
  *  <b>Never</b>　<small>表示永不存在的类型，可以是总会抛出异常或不会有返回值的表达式的返回值类型；是任何类型的子类型。</small>
  *  <b>类型断言</b>　<small>强制给值声明类型。</small>
```
    let someValue: string = 'hello world';
    let lenOne: number = (<string>someValue).length;    // 形式一
    let lenTwo: number = (someValue as string).length;  // 形式二
```
##  变量声明
  *  <b>var</b>
  *  <b>let</b>
  *  <b>const</b>
  *  <b>上述均可运用解构赋值（解构数组、解构对象、解构函数）,属性重命名，默认值，展开</b>
```
    // 重命名
    let { a: name1, b: name2 } = o;     // 等同下
    let name1 = 0.a;
    let name2 = o.b;
    // 函数声明
    function f( { a, b } = { a: '', b: 0}): void {
        // ...
    }
```
## 接口
  *  <b>为类型命名，不会检查顺序</b>
  *  <b>可选属性　？</b>
  *  <b>只读属性　readonly　ReadonlyArray<T>　ReadonlyStringArray<T></b>
  *  <b>额外属性检查　<small>当一个对象字面量存在任何目标类型不包含的属性时，会得到错误</small>
  *  <b>函数类型</b>
```
    interface someValue {
        ( key1: string, key2: string ): boolean
    }
    let someFunc: someValue;
    someFunc = function(param1: string, param2: string) {   // 不要求参数命名一致
        let result = param1.search(param2);
        return result > -1;
    }
```
  *  <b>可索引类型</b>
  *  <b>类类型</b>　<small>当一个类实现一个接口时，只对实例部分进行类型检查，constructor部分属于静态部分，不在检查范围内；</small>

## 类
  *  <b>constructor</b>
  *  <b>extends</b>
  *  <b>public</b>
  *  <b>private</b>
  *  <b>protected</b>
  *  <b>readonly</b>
  *  <b>get/set</b>
  *  <b>static</b>
  *  <b>abstract</b>

## 函数
  *  <b>可选参数</b>
  *  <b>默认参数</b>
  *  <b>剩余参数</b>

## 泛型
  *  <b>用参数来表示值的类型</b>

## 枚举
  *  <b>enum</b>　<small>可以随意的为复杂的数据类型指定元素的索引</small>

## 高级类型
  *  <b>交叉类型　&</b>
  *  <b>联合类型　|<b>