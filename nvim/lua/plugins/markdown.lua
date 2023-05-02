return {
	{ "folke/zen-mode.nvim" },
	{
		"iamcco/markdown-preview.nvim",
		build = "cd app && npm install",
		ft = "markdown",
		config = function()
			vim.g.mkdp_auto_start = 1
		end,
		init = function()
			vim.g.mkdp_filetypes = { "markdown" }
		end,
	},
	{ "godlygeek/tabular" },
	{ "preservim/vim-markdown" },
}

