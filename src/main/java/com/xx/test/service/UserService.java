package com.xx.test.service;

import com.xx.test.model.User;
import org.springframework.stereotype.Service;

/**
 * Created by Lijx on 2018/10/9.
 */
@Service
public interface UserService {

    public User selectUser(int id);
}
