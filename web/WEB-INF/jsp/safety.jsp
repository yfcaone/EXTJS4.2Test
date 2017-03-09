<%@ page language="java" isELIgnored="false"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="eam" value="${pageContext.request.contextPath}" />
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
.nav>li>a {
	position: relative;
	display: block;
	padding: 7px 15px;
}
</style>
<link rel="stylesheet" type="text/css"
	href="${eam}/ext/resources/ext-theme-gray/ext-theme-gray-all.css" />
<link rel="stylesheet" type="text/css"
	href="${eam}/ext/resources/css/css/icon.css" />
<script type="text/javascript" src="${eam}/jquery/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="${eam}/ext/ext-all-debug.js"></script>
<script type="text/javascript" src="${eam}/ext/SearchField.js"></script>
<%-- <script type="text/javascript" src="${eam}/ui/sign.js"></script> --%>
<%-- <script type="text/javascript" src="${eam}/ui/table.js"></script>  --%>
<script type="text/javascript" src="${eam}/ui/safety.js"></script> 
<%-- <script type="text/javascript" src="${eam}/ui/search.js"></script> --%>
<%-- <script type="text/javascript" src="${eam}/ui/safety.js"></script>  --%>
</head>
<body>
	<div id="dqDiv" align="center" style="width: 100%"></div>
   <div id="tabPanel" align="center" style="width: 100%"></div>
   <div id="my-tabs" align="center" style="width: 100%"></div>
</body>
</html>
