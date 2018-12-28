package com.xx.test.controller;

import com.xx.test.model.User;
import com.xx.test.service.impl.UserServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Lijx on 2018/10/9.
 */
@Controller
public class LoginController {
    @Resource
    private UserServiceImpl userService;

    @RequestMapping(value = "getUser",method = RequestMethod.POST)
    public ModelAndView login(HttpServletRequest request, HttpServletResponse response){
        int id = Integer.parseInt(request.getParameter("uid"));
        User u = userService.selectUser(id);
//        System.out.println("姓名：" + u.getUsername());
        if(u == null){
            return new ModelAndView("login","uname","无此人！");
        }

        return new ModelAndView("login","uname",u.getUsername());
    }
}
