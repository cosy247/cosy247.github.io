@echo off
chcp 65001
setlocal EnableDelayedExpansion

set tempFile=.\%1\.md
set toFile=.\%1\%2.md
set title=%2

if "%3" neq "" set title=%3

if exist %tempFile% (
	if exist %toFile% (
		echo 已存在/docs/%1/%2.md数据文件!
	) else (
		for /f "tokens=*" %%a in (%tempFile%) do (
			set line=%%a
			set line=!line:{title}=%title%!
			set line=!line:{date}=%date:~3,14%!
			echo !line!>>%toFile%
		)
		echo 生成/docs/%1/%2.md文件成功!
	)
) else (
    echo 不存在/docs/%1/.md模板文件!
)
