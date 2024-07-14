package com.pwn.object;

/**
 *
 */
public class Recursion01 {
    public static void main(String[] args) {
        T t = new T();
        t.test(4); //NOTE: 输出 2,3,4 结合内存图看

        int res = t.factorial(5);
        System.out.println("res =" + res);
    }
}

class T {
    public void test(int n) {
        if (n > 2) {
            test(n - 1);
        }
        System.out.println("n = " + n);
    }

    // 阶乘
    public int factorial(int n) {
        if (n == 1) {
            return 1;
        } else {
            return factorial((n - 1) * n);
        }
    }

}
