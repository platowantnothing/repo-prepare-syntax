package com.pwn.object;

/**
 * @Author Yi
 * @Date 2024/7/14 22:45
 * @Usage:
 * 1) 细节： 可变参数的实参可以为数组
 * 2) 细节:  可变参数可以和普通类型的参数一起放在形参列表，但必须保证可变参数再最后
 * 3）细节： 一个方法形参列表最多出现一个可变参数
 */
public class VarParameterDetails {
    public static void main(String[] args) {
        // 可变参数的实参可以为数组
        int[] arr = {1,2,3};
        Var var = new Var();
        var.f1(arr);
    }
}
class Var{
    public void  f1(int... nums){
        System.out.println("length is = " + nums.length);
    }

    //可变参数可以和普通类型的参数一起放在形参列表，但必须保证可变参数再最后
//    public void f2(int... nums, int a){
//
//    }

    // * 3）细节： 一个方法形参列表最多出现一个可变参数
//    public void f3 (int...nums, int... numbers, int a){}
}