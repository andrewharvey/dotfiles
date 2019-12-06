import XMonad
import XMonad.Hooks.DynamicLog
import XMonad.Hooks.ManageDocks
import XMonad.Hooks.ManageHelpers
import XMonad.Layout.NoBorders
import XMonad.Hooks.EwmhDesktops -- Chromium fullscreen

import XMonad.Util.Run(spawnPipe)

-- NOTE need libghc-xmonad-contrib-dev
import XMonad.Util.EZConfig(additionalKeysP)

import System.IO

myManageHook = composeAll [
    (className =? "Gimp")                                        --> doFloat
  , (className =? "gnome-calculator")                            --> doFloat
  , (className =? "calc")                                        --> doFloat
  , isFullscreen                                                 --> doFullFloat
   ]

-- http://hackage.haskell.org/package/xmonad-contrib-0.9/docs/XMonad-Util-EZConfig.html
myKeys =
    [
        ("M-c", spawn "calc")
        ,("M-n", spawn "nautilus")
        ,("<XF86AudioRaiseVolume>", spawn "pa-vol plus")
        ,("<XF86AudioLowerVolume>", spawn "pa-vol minus")
        ,("<XF86AudioMute>", spawn "pa-vol mute")
        ,("<XF86MonBrightnessUp>", spawn "backlight up")
        ,("<XF86MonBrightnessDown>", spawn "backlight down")
        ,("<XF86Display>", spawn "disp mirror")
        ,("<XF86TouchpadToggle>", spawn "disp off")
        ,("<Print>", spawn "gnome-screenshot --area")
        ,("<C-Print>", spawn "gnome-screenshot --area --delay=4 --include-pointer")
        ,("<XF86Suspend>", spawn "/usr/local/bin/suspend")
    ]

main = do
    xmproc <- spawnPipe "xmobar"
    xmonad $ defaultConfig
        {
        terminal = "sakura",
        borderWidth = 3,
        normalBorderColor = "#cccccc",
        focusedBorderColor = "#3300ff",

        manageHook = manageDocks <+> myManageHook <+> manageHook defaultConfig,
        layoutHook = lessBorders OnlyScreenFloat $ avoidStruts $ layoutHook defaultConfig,
        handleEventHook = fullscreenEventHook <+> docksEventHook, -- required for windows to appear below xmobar
        logHook = dynamicLogWithPP $ xmobarPP {
            ppOutput = hPutStrLn xmproc,
            ppTitle = xmobarColor "green" "" . shorten 50
        }
        } `additionalKeysP` myKeys
