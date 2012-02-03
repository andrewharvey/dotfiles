# my custom bash aliases
alias s='ls'
alias la='ls -lhA' #. files + human readable sizes + list mode
alias a='la'

alias aptcs='apt-cache search'
alias aptgi='sudo apt-get install'

alias wss='wget -S --spider'

alias cdmod='chmod'

alias u='cd ..'
alias uu='cd ../../'
alias uuu='cd ../../../'
alias uuuu='cd ../../../../'

alias gits='git s'

alias dud='du -csh'

# env variables for Debian packaging
export DEBEMAIL=andrew.harvey4@gmail.com
export DEBFULLNAME="Andrew Harvey"

# set up quilt for debian packaging
export QUILT_PATCHES=debian/patches
export QUILT_REFRESH_ARGS="-p ab --no-timestamps --no-index"

