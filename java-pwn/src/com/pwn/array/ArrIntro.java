package com.pwn.array;

/**
 * @Author Yi
 * @Date 2023/12/10 17:49
 * @Usage: 为什么需要数组？
 * 一个养鸡场有6只鸡，他们体重分别是 3kg, 5kg, 1 kg, 3.4kg, 2kg, 50kg
 * 统计6只鸡的总体重？和平均体重？
 * <p>
 * 1) 传统的或者是现有的思路：定义6个变量 < 传统实现的方式问题： 定义了6个变量
 * <p>
 * <p>
 * 数组 ： 可以存放【多个】【同一类型】的数据。数组也是一种数据类型，是引用类型。
 * 即， 数组就是一组数据。
 */
public class ArrIntro {
    public static void main(String[] args) {
        // define an array
        // 1) double[] 表示 是double类型的数组， 数组名 hens
        // 2) {3, 5, 1, 3.4, 2, 50} 表示数组的值
        double[] hens = {3, 5, 1, 3.4, 2, 50};

        // 遍历数组得到数组的所有元素的和， 使用 for
        // 1、可以通过hens[下标] 来访问数组的元素
        // 下标从0开始标号的比如第一个元素就是 hens[0]
        // 2、 通过for就可以循环地访问 数组的元素/值
        // 3、 使用一个变量 totalweight 将各个元素累积
        double totalWeight = 0;
        for (int i = 0; i < 6; i++) {
            System.out.println("第" + (i + 1) + "个元素的值=" + hens[i]);
            totalWeight += hens[i];
        }
        System.out.println("总体重: " + totalWeight + "， 平均体重: " + (totalWeight / 6));
    }
}
