-- Set lualine as statusline
-- See `:help lualine.txt`
require("lualine").setup({
	options = {
		icons_enabled = false,
		theme = "catppuccin",
		component_separators = "|",
		section_separators = "",
	},
	sections = {
		lualine_a = { "mode" },
		lualine_b = { "branch" },
		lualine_c = {},
		lualine_x = { "filename", "filetype" },
		lualine_y = {},
		lualine_z = {},
	},
})
