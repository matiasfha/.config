return {
	-- colorscheme
	{"folke/tokyonight.nvim"},
	{ "lukas-reineke/indent-blankline.nvim" }, -- Add indentation guides even on blank lines
	{ "numToStr/Comment.nvim" }, -- "gc" to comment visual regions/lines
	{ "tpope/vim-sleuth" }, -- Detect tabstop and shiftwidth automatically
	{ "knubie/vim-kitty-navigator" },
	{
		"windwp/nvim-autopairs",
		config = function()
			require("nvim-autopairs").setup({})
		end,
	},
	{ "norcalli/nvim-colorizer.lua" },
}
