vim.g.mapleader = " "
vim.g.maplocalleader = " "
-- Open Netrw
-- vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

vim.keymap.set("n", "<C-u>", "<C-u>zz")
vim.keymap.set("n", "<C-d>", "<C-d>zz")

-- move lines
vim.keymap.set("v", "J", ":m '>+1<CR>gv=gv")
vim.keymap.set("v", "K", ":m '<-2<CR>gv=gv")

-- quick escape
vim.keymap.set("i", "jk", "<ESC>")

-- save
vim.keymap.set("n", "<C-s>", ":w<cr>")
vim.keymap.set("n","<leader>Q",":wqall<cr>")

-- reload
vim.keymap.set("n", "<leader>lr", ":so<cr>")

vim.keymap.set("n", "<S-l>", ":BufferLineCycleNext<cr>")
vim.keymap.set("n", "<S-h>", ":BufferLineCyclePrev<cr>")
vim.keymap.set("n", "<C-c>", ":b#|bd#<cr>")
-- Split vertical
vim.keymap.set("n", "<leader>sv", ":vsp<cr>", { desc = "[S]plit [V]ertical"})

-- Select all
--vim.keymap.set("n", "<C-a>", "ggVG")

-- keep curso in the middle
vim.keymap.set("n", "n", "nzzzv")
vim.keymap.set("n", "N", "Nzzzv")

-- yank into system clipboard
vim.keymap.set("n", "<leader>y", '"+y')
vim.keymap.set("v", "<leader>y", '"+y')
vim.keymap.set("n", "<leader>Y", '"+y')

--format
vim.keymap.set("n", "<leader>lf", function()
  vim.lsp.buf.format()
end)

-- search and replace current cursor position word
vim.keymap.set("n", "<leader>rs", [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], { desc = "[R]earch [String] under cursor"})

-- Remap for dealing with word wrap
vim.keymap.set("n", "k", "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true })
vim.keymap.set("n", "j", "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true })

-- [[ Highlight on yank ]]
-- See `:help vim.highlight.on_yank()`
local highlight_group = vim.api.nvim_create_augroup("YankHighlight", { clear = true })
vim.api.nvim_create_autocmd("TextYankPost", {
  callback = function()
    vim.highlight.on_yank()
  end,
  group = highlight_group,
  pattern = "*",
})
-- Diagnostic keymaps
vim.keymap.set("n", "[d", vim.diagnostic.goto_prev)
vim.keymap.set("n", "]d", vim.diagnostic.goto_next)
-- vim.keymap.set("n", "<leader>e", vim.diagnostic.open_float)
vim.keymap.set("n", "<leader>q", vim.diagnostic.setloclist)

-- vim.keymap.set("n", "<leader>e", ":NvimTreeToggle<cr>", { desc = "Open [E]xplorer"})
-- vim.keymap.set("n", "<leader>e", ":Telescope file_browser<cr>", { noremap = true, desc = "Open [E]explorer" })

-- Open configuration file
vim.keymap.set("n", "<leader>oc", ":e ~/.config/nvim/init.lua<cr>", { desc = "[O]pen [C]onfiguration"})


-- Spell Checks
vim.keymap.set("n","<leader>sc",":set spell!<cr>", { desc = "[S]pell [C]heck"})


-- Create a new file in the same folder as current buffer
vim.keymap.set("n","<leader>nf",":e %:h/", { desc = "[N]ew [F]ile"})

-- Search for other occurrences of the current visual selection
vim.keymap.set('n','//', 'y/<C-R>"<CR>', { desc = "Search for other ocurrences of current visual selection"})

-- Stay in visual mode when changing the indent for the selection
vim.keymap.set("v", "<", "<gv")
vim.keymap.set("v", ">", ">gv")

-- Map enter to ciw in normal mode
vim.keymap.set("n", "<CR>", "ciw")

-- vim.keymap.set("n","<C-h>",":KittyNavigateLeft<cr>")
-- vim.keymap.set("n","<C-j>",":KittyNavigateDown<cr>")
-- vim.keymap.set("n","<C-k>",":KittyNavigateUp<cr>")
-- vim.keymap.set("n","<C-l>",":KittyNavigateRight<cr>")
--
-- Kitty
-- vim-kitty-navigator
-- if os.getenv("TERM") == "xterm-kitty" then
--     vim.g.kitty_navigator_no_mappings = 1
--     vim.g.tmux_navigator_no_mappings = 1
--
--     vim.api.nvim_set_keymap('n', 'C-h', ':KittyNavigateLeft <CR>', { noremap = true, silent = true })
--     vim.api.nvim_set_keymap('n', 'C-j', ':KittyNavigateDown <CR>', { noremap = true, silent = true })
--     vim.api.nvim_set_keymap('n', 'C-k', ':KittyNavigateUp <CR>', { noremap = true, silent = true })
--     vim.api.nvim_set_keymap('n', 'C-l', ':KittyNavigateRight <CR>', { noremap = true, silent = true })
-- end

-- twilight
vim.api.nvim_set_keymap("n", "tw", ":Twilight<enter>", {noremap=false})
