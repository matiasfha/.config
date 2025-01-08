local present, telescope = pcall(require, "telescope")
if not present then
	return
end

local actions = require('telescope.actions')
local open_with_trouble = require('trouble.sources.telescope').open

telescope.setup({
	defaults = {
		theme = "dropdown",
		previewer = true,
		file_ignore_patterns = { "node_modules", "package-lock.json" },
		layout_config = {
			width = 0.75,
			height = 0.75,
			prompt_position = "top",
			preview_cutoff = 120,
		},
		path_display = { "smart" },
		color_devicons = true,
		set_env = { ["COLORTERM"] = "truecolor" },
		vimgrep_arguments = {
			"rg",
			"--color=never",
			"--no-heading",
			"--with-filename",
			"--line-number",
			"--column",
			"--smart-case",
			"--hidden",
			"--glob=!.git/",
		},
		mappings = {
			i = {
				["<C-u>"] = false,
				["<C-d>"] = false,
				["<C-t>"] = open_with_trouble,
			},
			n = {
				["<C-t>"] = open_with_trouble,
			}
		},

	},
	extensions = {
		repo = {
		  list = {
			fd_opts = {
			  "--no-ignore-vcs",
			},
			search_dirs = {
			  "~/Development","~/.config"
			},
		  },
		},
	  },
})

-- Enable telescope fzf native, if installed
pcall(require("telescope").load_extension, "fzf")
pcall(require("telescope").load_extension, "file_browser")
pcall(require("telescope").load_extension, "neoclip")
pcall(require("telescope").load_extension, "dir")


local builtin = require("telescope.builtin")

vim.keymap.set("n", "<leader>ff", builtin.find_files, { desc = "[F]ind all [F]iles " })
vim.keymap.set("n", "<leader>fg", builtin.live_grep, { desc = "[F]ind by [G]rep" })
vim.keymap.set("n", "<leader>b", ":Telescope buffers sort_mru=true sort_lastused=true initial_mode=normal <cr>", { desc = "[B]uffers" })
vim.keymap.set("n", "<leader>fh", builtin.help_tags, { desc = "[F]ind [H]elp" })
vim.keymap.set("n", "<C-p>", builtin.git_files, { desc = "[F]ind [G]it files" })
vim.keymap.set("n", "<leader>fd", builtin.diagnostics, { desc = "[F]ind [D]iagnostics" })
vim.keymap.set("n", "<leader>ps", function()
	builtin.grep_string({ search = vim.fn.input("Grep > ") })
end)
vim.keymap.set("n", "<leader>fc", ":Telescope neoclip<cr>", { desc = "[F]ind [C]lipboard" })
vim.keymap.set(
	"n",
	"<leader>fb",
	":Telescope file_browser path=%:p:h select_buffer=true <cr>",
	{ noremap = true, desc = "[F]ile [B]rowser" }
)
-- vim.keymap.set("n", "<leader>/", function()
-- 	-- You can pass additional configuration to telescope to change theme, layout, etc.
-- 	builtin.current_buffer_fuzzy_find(require("telescope.themes").get_dropdown({
-- 		winblend = 10,
-- 		previewer = false,
-- 	}))
-- end, { desc = "[/] Fuzzily search in current buffer]" })
vim.keymap.set("n", "<leader>/", builtin.grep_string, { desc = "Search string"})

-- colorscheme
vim.keymap.set("n","<leader>c", builtin.colorscheme, { desc = "Find [C]olorscheme"})


