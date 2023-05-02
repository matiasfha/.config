vim.opt.guicursor = ""

vim.wo.number = true
vim.opt.nu = true
vim.opt.relativenumber = true

-- Enable break indent
vim.o.breakindent = true

vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.expandtab = true

vim.opt.smartindent = true

vim.opt.wrap = false

vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
vim.opt.undofile = true

vim.opt.hlsearch = false
vim.opt.incsearch = true

vim.opt.termguicolors = true

vim.opt.scrolloff = 8
vim.opt.signcolumn = "yes"
vim.opt.isfname:append("@-@")

vim.opt.updatetime = 50

-- vim.opt.colorcolumn = "80"

-- Decrease update time
vim.o.updatetime = 100
vim.wo.signcolumn = "yes"

-- Set completeopt to have a better completion experience
vim.o.completeopt = "menuone,noselect"

---  SETTINGS  ---
vim.opt.spelllang:append("cjk") -- disable spellchecking for asian characters (VIM algorithm does not support it)
vim.opt.shortmess:append("c") -- don't show redundant messages from ins-completion-menu
vim.opt.shortmess:append("I") -- don't show the default intro message
vim.opt.whichwrap:append("<,>,[,],h,l")

vim.filetype.add({
  extension = {
    tex = "tex",
    zir = "zir",
  },
  pattern = {
    ["[jt]sconfig.*.json"] = "jsonc",
  },
})


vim.opt.conceallevel = 0
vim.opt.fileencoding = "utf-8"
vim.opt.foldmethod = "expr"
vim.opt.foldexpr = "nvim_treesitter#foldexpr()"
vim.opt.foldlevel = 20
vim.opt.ruler = false
-- spell checks
-- vim.o.spelllang="en,es"
vim.o.spellsuggest="best,9"


