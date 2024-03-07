package com.yiyao.object;

/**
 * 引入: 遍历一个数组
 *
 * 方法的好处: 复用, 调用
 */
public class Method02 {
    public static void main(String[] args) {
        int[][] map = {{0, 0, 1}, {1, 1, 1}, {1, 2, 3}};
        for (int i = 0; i < map.length; i++) {
            for (int i1 = 0; i1 < map[i].length; i1++) {
                System.out.print(map[i][i1]);
            }
            System.out.println();
        }

        //再次遍历
        int[][] map2 = {{0, 0, 1}, {1, 1, 1}, {1, 2, 3}};
        for (int i = 0; i < map2.length; i++) {
            for (int i1 = 0; i1 < map2[i].length; i1++) {
                System.out.print(map2[i][i1] + "\t");
            }
            System.out.println();
        }

        // 调用
        ToolUtil toolUtil = new ToolUtil();
        toolUtil.printMap(new int[][]{{2, 2, 2}, {3, 3, 3}, {4, 5, 6}});
    }
}


// 改成方法调用
class ToolUtil {
    public void printMap(int[][] map) {
        for (int i = 0; i < map.length; i++) {
            for (int i1 = 0; i1 < map[i].length; i1++) {
                System.out.print(map[i][i1] + "_");
            }
            System.out.println();
        }
    }
}