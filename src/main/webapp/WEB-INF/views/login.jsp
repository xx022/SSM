<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>

<html>

<head>
    <title>starstar</title>
    <link rel="shortcut icon" href="${ctx}/favicon.ico"/>
    <script type="text/javascript" src="${ctx}/js/jquery-1.8.0.min.js"></script>
  </head>
<body>
<h1>这是login(⊙o⊙)哦</h1>
<input value="${uname}" id="dd">
<input value="测试js" id="jsinp" type="button">

<script type="text/javascript">
  $("#jsinp").click(function(){
    alert("hi");
  });


</script>
</body>
</html>
