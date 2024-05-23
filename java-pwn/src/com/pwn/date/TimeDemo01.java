package com.pwn.date;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Set;

/**
 * @Author Yi
 * @Date 2023/11/14 21:55
 * @Usage: Java.time 包
 * <p>
 * 1 为什么要用, 有什么好处?
 * 在 Java 8 中引入了 java.time 包，它提供了更加强大和灵活的日期和时间处理功能，相比于传统的 Date 类，它具有以下优势：
 * 1)不可变性: java.time 包中的大多数类都是不可变的，这意味着一旦创建，它们的值不能被修改，这有助于避免意外的修改和副作用。
 * 2)丰富的方法: java.time 包提供了丰富的方法来处理日期和时间，包括日期的创建、计算、格式化、解析等。这些方法使得日期和时间操作更加方便。
 * 3)清晰的命名: java.time 包中的类和方法都有清晰的命名，使得代码更易理解和维护。
 * 4)处理时区: java.time 包提供了更好的时区支持，可以轻松处理不同时区的日期和时间。
 * <p>
 * 2 LocalDateTime、LocalDate 和其他类
 * java.time 包中引入了一系列新的日期和时间类，包括：
 * LocalDateTime: 表示日期和时间，不包含时区信息。
 * LocalDate: 表示日期，不包含时分秒。
 * LocalTime: 表示时间，不包含日期。
 * ZonedDateTime: 表示带时区的日期和时间。
 * ZoneId: 表示时区。
 * <p>
 * <p>
 * 3 处理时区的新方法
 * java.time 包中的 ZonedDateTime 类允许处理带时区的日期和时间。它可以表示不同时区的日期和时间，并提供了时区的支持。通过 ZoneId 类，可以获取系统支持的时区列表。
 */
public class TimeDemo01 {
    public static void main(String[] args) {
        // 创建一个带有时区信息的 ZonedDateTime 对象，表示当前美国纽约的时间
        ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("America/New_York"));
        System.out.println("当前纽约时间: " + zonedDateTime);

// 获取系统支持的所有时区标识符
        Set<String> availableZoneIds = ZoneId.getAvailableZoneIds();

// 遍历所有时区标识符并打印出来
        availableZoneIds.forEach(System.out::println);


    }
}
