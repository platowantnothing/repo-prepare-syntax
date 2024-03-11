package com.platowantnothing.object;

/**
 * 属性: 成员变量
 *
 * 属性的数值类型可以是任意类型；基本数据类型和引用数据类型
 *
 * 属性不赋值。会有默认值，跟数组一样。(遵守数组分配的规则)
 *
 * 真正的对象是在 堆 里分配的空间和分配的数据。
 * car 是指向对象, 也被称为"对象引用"。 真正的对象是 new Car();
 *
 */
public class Object02 {
    public static void main(String[] args) {
        Car car = new Car();
        System.out.println(car.mile);// default val is 0
        System.out.println(car.name);// default val is null
        System.out.println(car.price);//0.0
    }
}

class Car{
    String name;
    int mile;
    String brand;
    double price;
}
