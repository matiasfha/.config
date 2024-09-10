
-- don't auto comment new line
vim.api.nvim_create_autocmd("BufEnter", { command = [[set formatoptions-=cro]] })

--- Remove all trailing whitespace on save
local TrimWhiteSpaceGrp = vim.api.nvim_create_augroup("TrimWhiteSpaceGrp", { clear = true })
vim.api.nvim_create_autocmd("BufWritePre", {
    command = [[:%s/\s\+$//e]],
    group = TrimWhiteSpaceGrp,
})

-- show cursor line only in active window
local cursorGrp = vim.api.nvim_create_augroup("CursorLine", { clear = true })
vim.api.nvim_create_autocmd({ "InsertLeave", "WinEnter" }, {
    pattern = "*",
    command = "set cursorline",
    group = cursorGrp,
})
vim.api.nvim_create_autocmd(
    { "InsertEnter", "WinLeave" },
    { pattern = "*", command = "set nocursorline", group = cursorGrp }
)

-- open telescope when neovim starts
-- vim.api.nvim_create_autocmd("VimEnter",{
--   callback = function()
--     vim.cmd("silent! lua require('telescope.builtin').find_files()")
--   end,
-- })

-- restore the last session
vim.api.nvim_set_keymap("n", "<leader>ql", [[<cmd>lua require("persistence").load({ last = true })<cr>]], {})
vim.cmd([[command! -nargs=0 GoToFile :Telescope find_files]])


-- resize splits when window is resize
vim.api.nvim_command('autocmd VimResized * wincmd = ')
local api = vim.api

local colors = {
  fg = "#76787d",
  bg = "#252829",
}
-- change the background color of floating windows and borders.
vim.api.nvim_create_autocmd('ColorScheme', {
  callback = function()
    vim.cmd('highlight NormalFloat guibg=none guifg=none')
    vim.cmd('highlight FloatBorder guifg=' .. colors.fg .. ' guibg=none')
    vim.cmd('highlight NormalNC guibg=none guifg=none')
  end,
})
-- Enable spell checking for certain file types
api.nvim_create_autocmd(
  { "BufRead", "BufNewFile" },
  -- { pattern = { "*.txt", "*.md", "*.tex" }, command = [[setlocal spell<cr> setlocal spelllang=en,de<cr>]] }
  {
    pattern = { "*.txt", "*.md", "*.tex","*.svx" },
    callback = function()
      vim.opt.spell = true
      vim.opt.spelllang = "en,es"
    end,
  }
)

-- if a file is a .env or  .envrc set the filetype to sh
vim.api.nvim_create_autocmd("BufRead",{
  pattern = {".env",".envrc"},
  callback = function()
    vim.bo.filetype = "sh"
  end
})

-- return to last edit position when opening files
vim.api.nvim_create_autocmd("BufReadPost", {
    pattern = "*",
    callback = function()
      if vim.fn.line("'\"") > 0 and vim.fn.line("'\"") <= vim.fn.line("$") then
        vim.cmd("normal! g`\"")
      end
    end
})
