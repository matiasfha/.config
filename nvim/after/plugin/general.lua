-- Enable Comment.nvim
require("Comment").setup()

-- Enable `lukas-reineke/indent-blankline.nvim`
-- See `:help indent_blankline.txt`
require("indent_blankline").setup({
	char = "┊",
	show_trailing_blankline_indent = false,
})

-- Gitsigns
-- See `:help gitsigns.txt`
require("gitsigns").setup({
	signs = {
		add = { text = "+" },
		change = { text = "~" },
		delete = { text = "_" },
		topdelete = { text = "‾" },
		changedelete = { text = "~" },
	},
})

require("catppuccin").setup({
	integrations = {
		fidget = true,
		gitsigns = true,
		lsp_saga = true,
		markdown = true,
		mini = true,
		mason = true,
		neotree = true,
		telescope = true,
		treesitter = true,
		treesitter_context = true,
		which_key = true,
	},
	transparent_background = true,
	dim_inactive = {
		enabled = false,
		shade = "dark",
		percentage = 0.05,
	},
})
