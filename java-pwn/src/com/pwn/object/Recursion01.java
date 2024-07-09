package com.pwn.object;

/** */
public class Recursion01 {
  public static void main(String[] args) {
    T t = new T();
    t.test(4); //NOTE: 输出 2,3,4 结合内存图看
  }
}

class T {
  public void test(int n) {
    if (n > 2) {
      test(n - 1);
    }
    System.out.println("n = " + n);
  }
}
