package com.pwn.array;

/**
 * @Author Yi
 * @Date 2023/12/10 20:46
 * @Usage:
 */
public class ArrayExercise01 {
    public static void main(String[] args) {
        // 1 创建一个char类型的26个元素的数组, 分别放置 ‘A’-‘Z’, 使用for循环访问所有元素并print
        // flow: 1 create an array
//        char[] arr = new char[26];
//        for (int c1 = 0; c1 < arr.length; c1++) {
//            arr[c1] = 'A' + c1;
//            System.out.println(arr[c1]);
//        }
//



        char[] chars = new char[26];
        for (int i = 0; i < chars.length; i++) {//loop for 26 times
            // chars 是 char[]
            // chars[i] 是 char
            chars[i] = (char) ('A' + i); // 'A' + i 是int类型,需要强制转换
        }
        for (int i = 0; i < chars.length; i++) {
            System.out.println(chars[i]);
        }
    }
}
/***
 * 补充一点 char 相关的内容：
 *  1、字符常量是用 '' 单引号括起来的单个字符。 例如: char c1 = 'a'; char c2 = '中'; char c3 = '9';
 *  2、java中还允许使用穿衣字符 '\' 来将其后的字符转变为特殊字符型常量. 例如： char c3 = '\n'; //\n表示换行符
 *  3、在 Java 中, char 的本质是一个【整数】, 在输出时, 是unicode码对应的字符；
 *      可以直接给char赋一个整数，输出时会按照unicode字符输出
 *      char类型是可以进行运算的，相当于一个【整数】，因为它有对应的Unicode码
 *      <<< System.out.println('a'+1);
 */

