@if not defined _echo @echo off
setlocal enabledelayedexpansion

set BatchFile=%0
set Root=%~dp0
set arcadeRoot=%cd%
set TerminalPath=%LocalAppData%\Microsoft\WindowsApps\wt.exe
set cmdPath=cmd.exe

set OptPull=false
set OptLink=false
set OptRun=false
set OptFirst=false

:ParseArguments
if    "%1" == ""                                                                                       goto :DoneParsing
if /I "%1" == "/?"                                                                                     call :Usage && exit /b 1
if /I "%1" == "/firsttime"        set "OptFirst=true" && set "OptLink=true"                            && shift && goto :ParseArguments
if /I "%1" == "/pull"             set "OptPull=true"                                                   && shift && goto :ParseArguments
if /I "%1" == "/link"             set "OptLink=true"                                                   && shift && goto :ParseArguments
if /I "%1" == "/run"              set "OptRun=true"                                                    && shift && goto :ParseArguments

call :Usage && exit /b 1
:DoneParsing

if "%OptFirst%" == "true" (
    git clone https://github.com/microsoft/pxt-arcade
    git clone https://github.com/microsoft/pxt
    git clone https://github.com/microsoft/pxt-common-packages
    call npm install -g pxt
    call npm install -g gulp
    cd pxt-arcade
    set arcadeRoot=%cd%
    echo done cloning
)

if "%OptPull%" == "true" (
    echo pull pxt-arcade
    git pull
    pushd ..\pxt
    echo pull pxt
    git pull
    popd
    pushd ..\pxt-common-packages
    echo pull pxt-common-packages
    git pull
    popd
)

if "%OptLink%" == "true" (
    pushd ..\pxt
    npm install
    npm run build
    popd
    pushd ..\pxt-common-packages
    npm install
    npm link ../pxt
    popd
    npm install
    npm link ../pxt
    npm link ../pxt-common-packages
    pushd skillmap
    npm install
    popd
)

if "%OptRun%" == "true" (
    start %cmdPath% /k "cd /d %arcadeRoot%\..\pxt && gulp watch"
    pxt serve --rebundle
)

echo Completed
exit /b

:Usage
echo Usage: %BatchFile% [options]
echo.
echo   Setup options:
echo     /firsttime           Sets up developer environment - will clone 3 repos (pxt, pxt-arcade, and pxt-common-packages) and then run /link option 
echo     /pull                Does a git pull on 3 repos (pxt, pxt-arcade, and pxt-common-packages)
echo     /link                Runs npm install and links the 3 repos
echo     /run                 Runs local server and watches for changes
goto :eof