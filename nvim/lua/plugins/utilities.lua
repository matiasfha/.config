return {
	{ "mbbill/undotree" },

	-- Bufferline
	{ "akinsho/bufferline.nvim", tag = "v3.*", dependencies = "nvim-tree/nvim-web-devicons" },
	-- status line
	{ "nvim-lualine/lualine.nvim" }, -- Fancier statusline

	{
		"folke/which-key.nvim",
		config = function()
			require("which-key").setup({
				-- your configuration comes here
				-- or leave it empty to use the default settings
				-- refer to the configuration section below
			})
		end,
	},
	-- Handles big files
	{
		"LunarVim/bigfile.nvim",
	},
	-- {'sunjon/shade.nvim'}
}
