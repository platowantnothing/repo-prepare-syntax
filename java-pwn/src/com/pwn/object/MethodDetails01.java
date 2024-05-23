package com.pwn.object;

/**
 * 访问修饰符: 控制方法使用范围
 * 有4种: public, protected, 默认(default), private
 * <p>
 * 返回数据类型:
 * 1.一个方法只能有最多有一个返回值 (返回多个值？ 数组)
 * 2.返回类型可以为任意类型, 包含基本类型或引用类型(数组, 对象)
 * 3.如果方法要求有返回，return值得有
 * 4.如果方法返回void 方法体里面可以没有return语句, 或者 只写 return;
 * 5.方法名 驼峰命名法  e.g. getSumAndSub
 * <p>
 * 参数列表(形参列表)
 * 1.可以0个参数 或者多个参数，多个参数逗号隔开
 * 2.参数类型可以是任意类型
 * 3.调用参数,传入相同类型或兼容的数据类型 类似方法返回的point 3
 * 4.方法定义 getSumAndSub(int a, int b) 形参, 方法调用 getSumAndSub((byte)1, (byte)2) 实参
 * 5.参数定义个数 和 实际的调用参数 一致; 顺序也不能颠倒
 * <p>
 * 方法体
 * 几乎什么都用, 但方法体里不能再定义方法
 */
public class MethodDetails01 {
    public static void main(String[] args) {
        AA a = new AA();
        //* 2.返回类型可以为任意类型, 包含基本类型或引用类型(数组, 对象)
        int[] sumAndSub = a.getSumAndSub(1, 4);

        // * 3.调用参数,传入相同类型或兼容的数据类型 类似方法返回的point 3
        a.getSumAndSub((byte) 1, (byte) 2);
    }
}


class AA {
    // * 1.一个方法只能有最多有一个返回值 (返回多个值？ 数组) 其实说白了是容器的概念
    public int[] getSumAndSub(int a, int b) {
        int[] res = new int[2];
        res[0] = a + b;
        res[1] = a - b;
        return res;
    }

    // * 3.如果方法要求有返回，return的值需要有；而且要求返回值类型和return值的类型一致或兼容
    public double f1() {
        double d1 = 1.1 * 30;
        int n = 1 + 111;
        return n;// int -> double
    }

    // * 4.如果方法返回void 方法体里面可以没有return语句, 或者 只写 return;
    public void f2() {
        System.out.println("1");
        System.out.println("2");
        System.out.println("3");
        return;
    }

}
