package com.yiyao.date;

import java.util.Date;

/**
 * @Author Yi
 * @Date 2023/11/13 21:55
 * @Usage: Date 类
 * 1 概述：java.util.Date类
 * 表示特定的瞬间，精确到毫秒。 就是表示当前系统时间  （1000毫秒 = 1秒）
 * Date 类用于在Java中表示日期和时间。它是Java标准库中用于处理日期和时间的基本类之一。
 * 日期和时间的表示通常涉及以下几个方面：
 * 1)日期：表示年、月、日，如 "2023-10-29" 表示2023年10月29日。
 * 2)时间：表示时、分、秒，如 "15:30:00" 表示下午3点30分。
 * 3)日期时间：同时包括日期和时间信息，如 "2023-10-29 15:30:00" 表示2023年10月29日下午3点30分。
 * 4)时区：由于不同地区使用不同的时区，同一时刻在不同时区可能对应不同的实际时间。
 * Date 类是Java标准库中用于表示日期和时间的类，它包含了一个长整型数，表示自1970年1月07:30:00(以SGT即新加坡标准时区为准)以来的毫秒数。
 * <b>这个长整型数被称为"Unix时间"或"时间戳"。<b/>
 *
 * <p>
 * 2 构造方法
 * 1) public Date()：分配Date对象并初始化此对象，以表示分配它的时间（精确到毫秒）。
 * 2) public Date(long date)：分配Date对象并初始化此对象，以表示自从标准基准时间（称为“历元
 * （epoch）”，即1970年1月1日00:00:00 GMT）以来的指定毫秒数。
 * > 如果我们我们使用有参构造， 那么表示在创建日期对象的时候， 这个时间是会从基准时间—— 1970 1月1日 0:0:0
 * > 1970 1月1日 1:0:0    1970 1月1日 9:0:0
 * > 时区  中国在东八区  1970 1月1日 8:0:0
 * > **总结：**该有参构造就是在基准时间的基础上加上你给的时间 时区问题
 * <p>
 * 3 成员方法
 * public long getTime()
 * 把日期对象转换成对应的时间毫秒值
 */
public class DateDemo01 {
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println("print date, with no arg: " + date);//Mon Nov 13 22:00:18 CST 2023
//        Date date1 = new Date(1L);
//        System.out.println("print date, with arg:" + date1);//Thu Jan 01 08:00:00 CST 1970 < CST 北京时间

        // getTime()
//        System.out.println("print the long: " + date.getTime());//1699884146426

        // 创建特定日期时间的 Date 对象
        long timestamp = 1603960800000L; // 2020-10-29 16:40:00的时间戳
        Date date2 = new Date(timestamp);
        System.out.println(date2);
    }
}
