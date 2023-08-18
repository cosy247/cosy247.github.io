@echo off
chcp 65001

set tempFile=.\docs\%1\.md
set toFile=.\docs\%1\%2.md

if exist %tempFile% (
	if exist %toFile% (
    	echo 已存在./docs/%1/%2.md数据文件!
	) else (
		copy ".\docs\%1\.md" ".\docs\%1\%2.md"
	)
) else (
    echo 不存在./docs/%1/.md模板文件!
)
