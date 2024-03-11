package com.platowantnothing.date;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

/**
 * @Author Yi
 * @Date 2023/11/13 21:55
 * @Usage: Date 类, Time类
 * 1、 比较日期
 *
 * 2、 Date 的可变性和不可变性
 *
 * 3、 Date类存在的一些问题：
 *  1)可变性: Date 类是可变的，这意味着一旦创建，其值可以随时修改。这会导致潜在的线程安全问题和不可预测的行为。
 *  2)精度问题: Date 类只能精确到毫秒级，不能表示更小的时间单位，例如纳秒。
 *  3)时区问题: Date 类在处理时区时不够灵活，通常需要通过手动设置时区来进行处理，容易出错。
 *  4)命名问题: Date 类中的一些方法的命名不够清晰，容易引起歧义。
 * 3.1 时区问题的解决
 *  可以使用 java.time 包中的新类，如 ZonedDateTime 和 ZoneId。
 * 3.2 可变性导致的线程不安全的解决
 *  由于 Date 类的可变性，它在多线程环境下容易引发线程安全问题。多个线程同时访问和修改同一个 Date 对象可能导致不一致的结果。
 *  为了解决这个问题，可以使用 java.time 包中的不可变类，如 LocalDateTime、LocalDate 和 LocalTime，它们在多线程环境下更安全。
 *
 * 4、java.time 包
 *
 *
 */
public class DateDemo03 {
    public static void main(String[] args) {
        Date date1 = new Date();//2023011014 21：43：00
        Date date2 = new Date(1603960800000L);//2020-10-29 16:40:00

        //比较两个日期是否相同
        System.out.println(date1.equals(date2));

        //比较两个日期的先后顺序
        int comparison = date1.compareTo(date2); // Date 重写了 compareTo() 方法
        if (comparison < 0) {
            System.out.println("日期1在日期2之前");
        } else if (comparison > 0) {
            System.out.println("日期1在日期2之后");
        } else {
            System.out.println("日期1和日期2相等");
        }

        //Date 类是可变的，这意味着可以通过 set 方法修改 Date 对象的值。这可能会导致线程安全性问题，因此在多线程环境中使用时需要格外小心。
        // Date 对象的可变性示例
        Date mutableDate = new Date();
        System.out.println("可变日期：" + mutableDate);

        // 修改 Date 对象的值
        mutableDate.setTime(1603960800000L);
        System.out.println("修改后的日期：" + mutableDate);

        //可以使用 java.time 包中的新类，如 ZonedDateTime 和 ZoneId。
        System.out.println(ZonedDateTime.now(ZoneId.of("America/New_York")));// return  ZonedDateTime
        ZonedDateTime dateTimeInTokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
        System.out.println(dateTimeInTokyo);
    }
}
