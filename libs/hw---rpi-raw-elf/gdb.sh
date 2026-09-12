#!/bin/sh

USB=`ls /dev/cu.usbmodem*`

arm-linux-gnueabihf-gdb \
	--eval "dir built/dockermake" \
	--eval "symbol-file built/dockermake/bld/pxt-app.full" \
	--eval "target extended-remote $USB" \
	--eval "set remote exec-file /sd/prj/pxt.elf"
