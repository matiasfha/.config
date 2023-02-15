local present, telescope = pcall(require, "telescope")
if not present then
	return
end

telescope.setup({
	defaults = {
		file_ignore_patterns = { "node_modules" },
		mappings = {
			i = {
				["<C-u>"] = false,
				["<C-d>"] = false,
			},
		},
	},
})

-- Enable telescope fzf native, if installed
pcall(require("telescope").load_extension, "fzf")
pcall(require("telescope").load_extension,"file_browser")
pcall(require("telescope").load_extension, "neoclip")
pcall(require("telescope").load_extension, "dir")

local builtin = require("telescope.builtin")

vim.keymap.set("n", "<leader>ff", builtin.find_files, { desc = "[F]ind all [F]iles " })
vim.keymap.set("n", "<leader>fg", builtin.live_grep, { desc = "[F]ind by [G]rep" })
vim.keymap.set("n", "<leader>ft", builtin.buffers, { desc = "[F]ind [T]abs " })
vim.keymap.set("n", "<leader>fh", builtin.help_tags, { desc = "[F]ind [H]elp" })
vim.keymap.set("n", "<C-p>", builtin.git_files, { desc = "[F]ind [G]it files" })
vim.keymap.set("n", "<leader>fd", builtin.diagnostics, { desc = "[F]ind [D]iagnostics" })
vim.keymap.set("n", "<leader>ps", function()
	builtin.grep_string({ search = vim.fn.input("Grep > ") })
end)
vim.keymap.set("n", "<leader>fc", ":Telescope neoclip<cr>", { desc = "[F]ind [C]lipboard" })
vim.keymap.set("n", "<leader>fb", ":Telescope file_browser path=%:p:h select_buffer=true <cr>", { noremap = true, desc = "[F]ile [B]rowser" })
vim.keymap.set("n", "<leader>/", function()
	-- You can pass additional configuration to telescope to change theme, layout, etc.
	builtin.current_buffer_fuzzy_find(require("telescope.themes").get_dropdown({
		winblend = 10,
		previewer = false,
	}))
end, { desc = "[/] Fuzzily search in current buffer]" })
