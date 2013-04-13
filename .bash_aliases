# directory listing
alias s='ls'
alias la='ls -lhA' #. files + human readable sizes + list mode
alias a='la'

# wget with --spider mode and --server-response headers
alias wss='wget -S --spider'

# typo
alias cdmod='chmod'

# change up directories
alias u='cd ..'
alias uu='cd ../../'
alias uuu='cd ../../../'
alias uuuu='cd ../../../../'

# git status
alias gits='git s'

# disk usage
alias dud='du -csh'

# make and change directory
alias mc='mkdir $1 && cd $1'

# apt-get update && upgrade
alias aptuu='sudo apt-get update && sudo apt-get upgrade'

# start an HTTP server here
alias http='python -m SimpleHTTPServer $1'

# shutdown the machine
alias halt='sudo shutdown -h now'

# env variables for Debian packaging
export DEBEMAIL=andrew.harvey4@gmail.com
export DEBFULLNAME="Andrew Harvey"

# set up quilt for debian packaging
export QUILT_PATCHES=debian/patches
export QUILT_REFRESH_ARGS="-p ab --no-timestamps --no-index"

