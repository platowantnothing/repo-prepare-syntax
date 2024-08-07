## How to use this readme file:
* https://github.com/timerring/backend-tutorial/blob/main/java-tutorial/ch07_oop_fundamentals.md#%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95

> 内存图 - 对象在内存中存在形式
> !["对象在内存中存在形式"](img01.jpg)
> 注意：字符串本质上是一个引用类型，按照jvm的规则会把字符串放在方法区的常量池中间。 
> 栈中的是对象引用（对象名），实际上的对象在堆中。

> 内存图 - 核心：引用传递传递的是地址。
> ![""](img02.png)
 
> 内存图 - 成员方法
> !["方法的调用机制原理"](img03.png)
> 调用机制总结： 1)main方法是程序的入口，
> 2)当程序执行到方法时，会在栈里开辟空间，-(压栈 ) 3)当方法执行完毕，或执行到return语句拿到返回值，方法就执行完毕 -(弹栈) 4)返回到方法调用的地方 5)返回后继续执行代码
> 6)执行到main方法结束，整个程序退出
>

### 成员方法传参机制
>  Refer ./MethodParameter01.java 
> ![](./04-methodparameter.png)
> Refer : ./MethodParameter02.java
>![](./05-methodparameter.png)
> IMPORTANT!!! ![](./06-methodparamter.png) 思考: 引用传递, 当 p=null，相当于栈里的对象不再指向堆内的空间, 指向null
> Extend content and refer: ![](./07-methodparameter.png) new Person() in method test200, will be handle by GC
Practice: MethodExercise02.java

### 方法递归调用 (recursion)
> 关于递归的一些细节:
 1. 执行一个方法时，就创建一个新的受保护的独立空间(栈空间)
 2. 方法的局部变量时独立的，不会相互影响，比如n变量
 3. 如果方法中使用的时引用类型变量(比如数组,对象)，就会共享该引用类型的数据
 4. 递归需要有限制条件，不然会出现 stackOverflowError
 5. 当一个方法执行完毕，或者遇到return，就会返回，返回给调用的位置
#### 练习： 迷宫问题

### 方法重载 OverLoad
> 基本介绍：同一个类中，多个同名方法的存在，但要求 形参列表不一致
> pros: 减轻了起名/记名的麻烦；利于接口编程

> 注意事项和使用细节：1)方法名必须相同 2）形参列表必须不同(形参类型或个数或顺序) 3)返回类型：无要求

### 可变参数
> 基本概念: JAVA允许将同一类中多个同名 同功能 但参数个数不同 的方法，封装成一个方法
> 基本语法
```java
访问修饰符 返回类型 方法名(数据类型...形参名){
}
//VarParameters
```
> 使用细节
> 1) 细节： 可变参数的实参可以为数组  
> 2) 细节:  可变参数可以和普通类型的参数一起放在形参列表，但必须保证可变参数再最后  
> 3）细节： 一个方法形参列表最多出现一个可变参数

### [IMPORTANT] 作用域 (Scope)
1.在JAVA中，主要的变量就是属性(成员变量)和局部变量

2.局部变量 = 一般是指在成员方法中定义的变量

3.Java中作用域的分类：
 a.全局变量： 也就是属性，作用域为整个类
 b. 局部变量： 除了属性之外的其他变量，作用域为定义它的代码块中

4.全局变量可以不赋值，直 接使用，因为有默认值。而，局部变量必须赋值后，才能使用，因为没有默认值。

#### 注意事项和使用细节
1.属性和局部变量可以重名，访问时遵循就近原则

2. 在同一个作用域中，比如在同一个成员方法中，两个局部变量不能重名

3.属性生命周期较长， 伴随着对象的创建而创建，伴随着对象的死亡而死亡。 局部变量，生命周期较短，伴随着代码块的生命周期，即在一次方法调用过程中创建死亡。

4.作用域范围不同：
- 全局变量/属性： 可以被本类使用，或其他类使用(通过对象调用)
- 局部变量： 只能在本类中对应的方法中调用

5.修饰符不同： 全局可以加修饰符； 局部不可以加修饰符

### 构造方法/构造器 constructor
> 需求引入： 之前创造对象时，是先把一个对象创建好后，再给对象的属性(e.g. Person.name, Person.age)赋值。如果现在我要求，在创建人类的对象时，就直接指定这个对象的年龄和姓名，该怎么做？这时就可以使用构造器。

1.基本语法
```
[修饰符] 方法名(形参列表) {
  方法体;
}
```
语法说明：       
- 构造器的修饰符可以默认，也可以是 public protected private
- 构造器没有 **返回值**
- 方法名 和 类名字必须一样   
- 参数列表 和 成员方法 一样的规则
- 构造器的调用，由系统完成 （创建对象时，系统会完成）

基本介绍： 构造方法又叫构造器， 是类的一种特殊方法，主要作用是完成对新对象的初始化。

2.使用细节
- 一个类可以定义多个不同的构造器， 构造器重载
- 构造器名 和 类名相同
- 构造器没有返回值
- 构造器是完成对象的初始化，并不是创建对象
- 在创建对象时，系统自动调用该类的构造方法
- [IMPORTANT] 如果没有定义构造器，系统会自动给类生成一个默认的无参构造器(默认的构造器) ``javap`` 反编译
- 一旦定义了构造器， 默认的就不能被使用， 除非显示定义无参构造

3.对象创建的流程分析
```java
class Person{
    int age=90;
    String name;
    Person(String n, int a){
        name = n;
        age= a;
    }
}
Person p = new Person("NNN",20);
```
分析： 方法区加载 Person类 --> 堆 开辟数据空间 age=0, name=null 默认初始化 --> 显示初始化 age=90, name=null --> 构造器上场 MMM在常量池， name指向常量池， age=20 --> 栈(对象的引用)通过地址值指向堆内的对象 

### this 关键字
>  引入 -> this01.java
