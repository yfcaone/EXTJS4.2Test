package cn.yfc.aone;

import cn.yfc.aone.bean.NoticeBean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * Created by aone on 2017/3/11.
 */
public class ControllerTest {

    @ResponseBody
    @RequestMapping(value="/createNew",method= RequestMethod.POST)
    public Map<String,Object> createNew(@RequestParam(value = "attachment", required = false) MultipartFile attachment, HttpServletRequest request, NoticeBean bean){
        try {
            if(attachment!=null){
                String fileName=new Date().getTime()+attachment.getOriginalFilename();
                String fileRoot="E:/demo";
                new File(fileRoot).mkdirs();
                File fileLocal=new File(fileRoot,fileName);
                attachment.transferTo(fileLocal);
                bean.setFileLocal(fileLocal.toString());
                bean.setFileName(fileName);
            }
            System.out.println(bean);
        } catch (IllegalStateException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        Map<String,Object> returnMap=new HashMap<String, Object>();
        returnMap.put("success", true);
        return returnMap;

    }
}
