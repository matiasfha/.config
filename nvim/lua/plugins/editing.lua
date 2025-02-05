return {
	-- colorscheme
--	{ "folke/tokyonight.nvim" },
	{
		"catppuccin/nvim",
		name = "catppuccin",
		priority = 1000,
		lazy = false,
		config = function()
			require("catppuccin").setup({
				flavour = "auto",
				transparent_background = true,
				term_colors = true,
				dim_inactive = {
					enabled = true
				},
			})
			vim.cmd("colorscheme catppuccin")

		end
	},

    { "lukas-reineke/indent-blankline.nvim", main = "ibl", opts = {} }, -- Add indentation guides even on blank lines
	{ "numToStr/Comment.nvim" }, -- "gc" to comment visual regions/lines
	{ "tpope/vim-sleuth" }, -- Detect tabstop and shiftwidth automatically
	{
		"windwp/nvim-autopairs",
		config = function()
			require("nvim-autopairs").setup({})
		end,
	},
	{ "norcalli/nvim-colorizer.lua" },
	{
		"echasnovski/mini.bufremove",
		version = "*",
		config = function()
			require("mini.bufremove").setup()
		end,
	},
	{
		"folke/trouble.nvim",
		dependencies = { "nvim-tree/nvim-web-devicons" },
		opts = {
			-- your configuration comes here
			-- or leave it empty to use the default settings
			-- refer to the configuration section below
		},
	},
}
