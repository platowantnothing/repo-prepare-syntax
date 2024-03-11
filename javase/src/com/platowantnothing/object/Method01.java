package com.platowantnothing.object;

/**
 * @Author Yi
 * @Date 2024/3/7 22:52
 * @Usage: 成员方法
 */
public class Method01 {
    public static void main(String[] args) {
        // 方法不调用 , 不会输出
        // 使用： 创建对象, 然后调用
        Persons p1 = new Persons();
        p1.speak();

        // 添加 cal01(), 计算 1+2+3+...+1000结果
        p1.cal01(1000);

        // 计算两个数的和
        p1.getSum(1, 2);
    }
}

class Persons {
    String name;
    int age;

    //方法(成员方法)

    /**
     * public 方法是公开的
     * void 方法没有返回值
     * speak 方法名
     * () 表示没有传入参数 - 形参列表
     * {} 方法体, 可以些要执行的代码
     */
    public void speak() {
        System.out.println("我是一个好人");
    }

    /**
     * @param n 形参列表: 可以接收调用者输入
     */
    public void cal01(int n) {
        int res = 0;
        for (int i = 0; i <= n; i++) {
            res += i;
        }
        System.out.println("res is " + res);
    }

    public void getSum(int i1, int i2) {//public int getSum(int i1, int i2){return i1+i2}
        System.out.println("sum is :" + (i1 + i2));
    }
}