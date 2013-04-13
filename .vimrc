filetype on
filetype plugin on
filetype indent on

syntax on

" Fast saving
nmap <leader>w :w!<cr>

colorscheme zellner
set background=dark
set nonu

set nobackup
set nowb
set noswapfile

"Move a line of text using ALT+[jk]
nmap <M-j> mz:m+<cr>`z
nmap <M-k> mz:m-2<cr>`z
vmap <M-j> :m'>+<cr>`<my`>mzgv`yo`z
vmap <M-k> :m'<-2<cr>`>my`<mzgv`yo`z

set autoindent
set expandtab
set softtabstop=4
set shiftwidth=4

" wrap lines
set tw=80

" line numberings
set number
set relativenumber

" spell checking
set spell

" give ; the same effect as : (so you don't need the Ctrl)
nnoremap ; :

" save file using sudo
cmap w!! w !sudo tee % >/dev/null

set showmatch
set incsearch
set hlsearch
set ignorecase
set smartcase
