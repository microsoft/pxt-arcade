@if not defined _echo @echo off
setlocal enabledelayedexpansion

set BatchFile=%0
set Root=%~dp0
set arcadeRoot=%cd%
set TerminalPath=%LocalAppData%\Microsoft\WindowsApps\wt.exe
set cmdPath=cmd.exe

:ParseArguments
if    "%1" == ""                                                                                              goto :DoneParsing
if /I "%1" == "/?"                                                                                            call :Usage && exit /b 1
if /I "%1" == "/firsttime"        set "OptFirst=true" && set "OptLink=true"                                   && shift && goto :ParseArguments
if /I "%1" == "/pull"             set "OptPull=true"                                                          && shift && goto :ParseArguments
if /I "%1" == "/link"             set "OptLink=true"                                                          && shift && goto :ParseArguments
if /I "%1" == "/run"              set "OptRun=true"                                                           && shift && goto :ParseArguments
if /I "%1" == "/plr"              set "OptPull=true" && set "OptLink=true" && set "OptRun=true"               && shift && goto :ParseArguments

call :Usage && exit /b 1
:DoneParsing

REM this assumes you're running this batch file with no prior repo cloned
if "%OptFirst%" == "true" (
    npm install -g pxt
    npm install -g gulp
    git clone https://github.com/microsoft/pxt-arcade
    git clone https://github.com/microsoft/pxt
    git clone https://github.com/microsoft/pxt-common-packages
    cd pxt-arcade
    set arcadeRoot=%cd%
)

REM The rest of these commands assume you're in the pxt-arcade repo folder

if "%OptPull%" == "true" (
    git pull
    pushd ..\pxt
    git pull
    popd
    pushd ..\pxt-common-packages
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
)

if "%OptRun%" == "true" (
    start %cmdPath% /k "cd /d %arcadeRoot%\..\pxt && gulp watch"
    pxt serve --rebundle
)

exit /b

:Usage
echo Usage: %BatchFile% [options]
echo.
echo   Setup options:
echo     /firsttime           Sets up developer environment - will clone 3 repos (pxt, pxt-arcade, and pxt-common-packages) and then run /link option 
echo     /pull                Does a git pull on 3 repos (pxt, pxt-arcade, and pxt-common-packages)
echo     /link                Runs npm install and links the 3 repos
echo     /run                 Runs local server and watches for changes
echo     /plr                 An alias to run /pull /link /run
goto :eof