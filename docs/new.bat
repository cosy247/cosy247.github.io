@echo off
chcp 65001
setlocal EnableDelayedExpansion

set toFile=.\%1.md
set title=%1

if "%2" neq "" set title=%2

if exist %toFile% (
	echo 已存在%1.md文件!
) else (
	for /f "tokens=*" %%a in (.md) do (
		set line=%%a
		set line=!line:{title}=%title%!
		set line=!line:{date}=%date:~3,14%!
		echo !line!>>%toFile%
	)
	echo 生成%1.md文件成功!
)
