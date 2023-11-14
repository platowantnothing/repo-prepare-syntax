package com.yiyao.date;

import java.time.Year;
import java.util.Calendar;
import java.util.Date;

/**
 * @Author Yi
 * @Date 2023/11/13 22:36
 * @Usage: Calender 类
 * <p>
 * 1 概述
 * java.util.Calendar 抽象类。
 * 出现的原因在于Date类里面很多方法过时了，此类的出现替换了许多Date的方法，方便获取各个时间属性。
 * <p>
 * 2 构造方法
 * 不同于DateFormat使用子类进行创建对象，Calendar通过静态方法得到Calendar对象：
 * *`public static Calendar getInstance()  通过静态方法得到一个Calendar对象`*
 * <p>
 * 3 成员方法
 * public int get(int field)： 返回给定日历字段的值。
 * public void set(int field, int value)： 将给定的日历字段设置为给定值。
 * Public abstract void add(int field,int amount)：根据日历的规则为给定的日历字段添加或减去指定的时间量。 整数为在原来的时间上添加  负数表示在原来的时间上去减少
 * public Date getTime()：返回一个表示此Calendar时间值（从历元到现在的毫秒偏移量）的Date对象。
 */
public class CalenderDemo01 {

    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        int i = calendar.get(Calendar.YEAR);
        System.out.println(i);//2023

        calendar.set(Calendar.YEAR,1997);
        System.out.println(calendar.get(calendar.YEAR));//1997

        calendar.add(Calendar.YEAR,1);
        System.out.println(calendar.get(calendar.YEAR));//1998

        Date date = calendar.getTime();
        System.out.println(date);
    }
}
