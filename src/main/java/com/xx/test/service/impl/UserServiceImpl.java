package com.xx.test.service.impl;

import com.xx.test.mapper.UserMapper;
import com.xx.test.model.User;
import com.xx.test.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Lijx on 2018/10/9.
 */
@Service
public class UserServiceImpl implements UserService{
    @Resource
    private UserMapper userMapper;

    @Override
    public User selectUser(int id) {
        User u = userMapper.selectByPrimaryKey(id);
        return u;
    }
}
