#!/bin/bash

if [ -x /usr/bin/nm-applet ] ; then
    stalonetray &
    nm-applet --sm-disable &
fi

export _JAVA_AWT_WM_NONREPARENTING=1

# mod-shift-q will quit everything, on dvokak this means that killing everything is on key away from moving a window, terrible design
# this attempts to avoid killing everything, short of a way to disable this
while :; do
         xmonad
         if [ `echo -e 'no\nyes' | dmenu -p 'Do you really want to quit xmonad?'` = "yes" ]; then
             break
         fi
done
