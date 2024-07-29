package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/21 14:27
 * @Usage:
 */
public class this01 {
    public static void main(String[] args) {
        Anna anna = new Anna("Anna", 22);
        anna.info();// null   0
    }
}

class Anna {
    String name;
    int age;

    //    public Anna(String n, int a) {
//        name = n;
//        age = a;
//    }
//    public Anna(String name, int age) {
//        name = name;
//        age = age;
//    }
    // NOTE: 根据变量作用域的原则，构造器的name时局部变量，age同理
    // this
    public Anna(String name, int age) {
        name = this.name;
        age = this.age;
    }
    public void info() {
        System.out.println(name + "\t" + age + "\t");
    }
}

