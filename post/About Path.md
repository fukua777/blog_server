---
title: About　Path
categories: 甫夸之谈———node
tags: "path"
---

> 关于

　　path对象在node.js中可以用来提供目录信息。
> 主要

+	<b style="color:black;font-size:18px;">path.basename(path[,ext])　　获取文件名称</b>
	path,　必选参数，路径 
	[ext]　可选参数，文件扩展名
    return  文件名
    <!-- more -->
+	<b style="color:black;font-size:18px;">path.delimiter　　获取路径分隔符</b>
    return  分隔符
+	<b style="color:black;font-size:18px;">path.dirname(path)　　获取目录名称</b>
	path,　必选参数，路径 
	return  文件夹名称
+	<b style="color:black;font-size:18px;">path.extname(path)　　获取文件扩展名</b>
	path,　必选参数，路径 
	return  扩展名
+	<b style="color:black;font-size:18px;">path.sep　　获取目录段落分隔符</b>
	path,　必选参数，路径 
	return  分隔符
+	<b style="color:black;font-size:18px;">path.isAbsolute(path)　　判断目录是否是绝对路径</b>
	path,　必选参数，路径 
	return  布尔值
+	<b style="color:black;font-size:18px;">path.normalize(path)　　对路径进行整合</b>
	path,　必选参数，路径 
	return  简洁化路径
+	<b style="color:black;font-size:18px;">path.join([...paths])　　将所有提供的路径进行拼接，并进行整合</b>
	paths,　必选参数，路径 
	return  拼接后的路径
+	<b style="color:black;font-size:18px;">path.resolve([...paths])　　将相对路径转为绝对路径</b>
	paths,　必选参数，路径 
	return  绝对路径
+	<b style="color:black;font-size:18px;">path.relative(from,to)　　获取第二个路径对于第一个路径的相对路径</b>
	from,to,　必选参数，路径 
	return  相对路径
+	<b style="color:black;font-size:18px;">path.format(pathObj)　　设置路径</b>
	pathObj,　必选参数，路径对象，包括dir、root、base、name、ext 
	return  设置后的路径
+	<b style="color:black;font-size:18px;">path.parse(path)　　获取路径对象</b>
	path,　必选参数，路径 
	return  路径对象