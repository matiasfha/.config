
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
