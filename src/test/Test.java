import com.xx.test.mapper.UserMapper;
import com.xx.test.model.User;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by Lijx on 2018/10/9.
 */

// 加载spring配置文件
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-mybatis.xml"})
public class Test {

    @Autowired
    private UserMapper userMapper;

    @org.junit.Test
    public void te(){
        User u = userMapper.selectByPrimaryKey(1);
        System.out.print("邮箱是："+u.getEmail());
    }
}
