package com.platowantnothing.object;

/**
 * <b>方法的传参机制(重要!!!)</b>
 * 结论: 基本数据类型 方法与方法之间对数据的改变是独立的(栈与栈之间数据是独立的)
 */
public class MethodParameter01 {
    public static void main(String[] args) {
        int a=10;
        int b=20;
        AAAA obj = new AAAA();
        obj.swap(a,b);
        System.out.println("\nMain:\na=" + a + "\tb=" + b); // 10 20
    }
}

class AAAA {

    public void swap(int a, int b) {
        System.out.println("\nBefore:\na=" + a + "\tb=" + b); // 10 20
        int temp = a;
        a=b;
        b=temp;
        System.out.println("\nAfter:\na=" + a + "\tb=" + b);// 20 10
    }
}