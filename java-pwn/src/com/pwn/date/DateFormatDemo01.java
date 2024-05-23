package com.pwn.date;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @Author Yi
 * @Date 2023/11/13 22:02
 * @Usage: DateFormat 类
 * <p>
 * 1 概述 :
 * java.text.DateFormat, 是日期/时间格式化子类的抽象类，我们通过这个类可以帮我们完成日期和文本之间的转换，也就是可以在Date对象与String对象之间进行来回转换。
 * <p>
 * 2 构造方法：
 * 因为DateFormat是抽象类，不能直接使用，所以需要用的子类java.text.SimpleDateFormat创建对象，实现转换的功能。
 * public SimpleDateFormat(String pattern)：
 * 用给定的模式和默认语言环境的日期格式符号构造 SimpleDateFormat。
 * 参数pattern是一个字符串，代表日期时间的自定义格式
 * 常用的pattern格式规则:
 * y - 年
 * M - 月
 * d - 日
 * H - 时
 * m - 分
 * s - 秒
 * 也可以参考: https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
 * <p>
 * 3 成员方法
 * 1）date日期转换为String类型的日期数据 < 格式化
 * public String format(Date date)：将Date对象格式化为字符串
 * 2) String类型的字符串转为date对象 < 解析
 * public Date parse(String  source)：将字符串解析为Date对象。
 * 3)注意：在解析时，string日期的格式要和pattern格式一致，不然会报【ParseException】
 */
public class DateFormatDemo01 {
    public static void main(String[] args) throws ParseException {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM月dd日 HH:mm:ss");
        String str = sdf.format(date);
        System.out.println(str); //2023-11月13日 22:29:36
        //解析 parse
        //注意：在解析时，string日期的格式要和pattern格式一致，不然会报【ParseException】
        //String dateStr = "2002年01月01日 12:12:12";
        //Date parseDate = sdf.parse(dateStr);
        //System.out.println(parseDate);
        /*Exception in thread "main" java.text.ParseException: Unparseable date: "2002年01月01日 12:12:12"
        at java.text.DateFormat.parse(DateFormat.java:366)
        at com.yiyao.date.DateFormatDemo01.main(DateFormatDemo01.java:46)*/

        //正向案例
        String dateStr = "2002-01月01日 12:12:12";
        Date parseDate = sdf.parse(dateStr);
        System.out.println(parseDate);
    }
}
