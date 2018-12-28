<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>starstar</title>
    <link rel="shortcut icon" href="favicon.ico"/>
    <%--<script type="text/javascript" src="${ctx}/js/jquery-1.8.0.min.js"></script>--%>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <%--<link rel="bookmark" href="favicon_16.ico"/>--%>
    <!-- site css -->
    <link rel="stylesheet" href="${ctx}/css/site.min.css">
    <link rel="stylesheet" href="${ctx}/css/jedate.css">
    <link rel="stylesheet" href="${ctx}/css/style.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
    <!--[if lt IE 9]>

    <![endif]-->
    <%--<script type="text/javascript" src="$page.GetMakeurl("/js/site.min.js")"></script>--%>
    <script type="text/javascript" src="${ctx}/js/jquery-1.12.4.min.js"></script>
    <%--<script type="text/javascript" src="${ctx}/js/jquery-form.js"></script>--%>
    <%--<script type="text/javascript" src="${ctx}/js/jedate.min.js"></script>--%>
    <script type="text/javascript" src="${ctx}/js/Particleground.js"></script>
    <%--<script type="text/javascript" src="${ctx}/js/verificationNumbers.js"></script>--%>
    <style>
        body{
            height: 100%;
            /*background: #16a085;*/
            background-color: rgb(187,255,255);
            /*overflow: hidden;*/
        }

        #content{
            width: 400px;
            height: 400px;
            /*float: right;*/
            margin-top: 20px;
            font-size: 20px;
        }
    </style>
</head>
<body>

<div id="content">
    <h2>Hello World!</h2>
    <form id = "form" action="/getUser" method="post">
        <input type="submit">
        <input name="uid" placeholder="请输入" type="text">
    </form>
</div>

</body>

<script type="text/javascript">

    $(document).ready(function() {
        //粒子背景特效
        $('body').particleground({
            dotColor: 'white',
            lineColor: 'white'
        });
        //验证码
//        createCode();
        //测试提交，对接程序删除即可
//        $(".submit_btn").click(function(){
//            location.href="javascrpt:;";
//        });
    });


</script>

</html>
