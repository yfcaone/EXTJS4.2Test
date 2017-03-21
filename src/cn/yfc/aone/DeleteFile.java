package cn.yfc.aone;

import java.io.File;
import java.util.Scanner;

/**
 * 根据路径删除文件
 * Created by aone on 2017/3/21.
 */
public class DeleteFile {

    /**
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("輸入文件路徑：");
        Scanner sc = new Scanner(System.in);

        String path = sc.next();
        System.out.println(path);
        deleteFiles(path);
    }

    public static void deleteFiles(String path) {
        File file = new File(path);
        //1級文件刪除
        if (!file.isDirectory()) {
            file.delete();
        } else if (file.isDirectory()) {
            //2級文件列表
            String[] filelist = file.list();
            //獲取新的二級路徑
            for (int j = 0; j < filelist.length; j++) {
                File filessFile = new File(path + "\\" + filelist[j]);
                if (!filessFile.isDirectory()) {
                    filessFile.delete();
                } else if (filessFile.isDirectory()) {
                    //遞歸調用
                    deleteFiles(path + "\\" + filelist[j]);
                }
            }
            file.delete();
        }
    }

}
