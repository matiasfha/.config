return {
    { -- LSP Configuration & Plugins
		"neovim/nvim-lspconfig",
		dependencies = {
			-- Automatically install LSPs to stdpath for neovim
			"williamboman/mason.nvim",
			"williamboman/mason-lspconfig.nvim",

			-- Useful status updates for LSP
			{
				"j-hui/fidget.nvim",
				config = function()
					require("fidget").setup({})
				end,
			},
			"folke/neodev.nvim",
		},
	},
	{ --formaters
		"jose-elias-alvarez/null-ls.nvim",
		dependencies = { { "nvim-lua/plenary.nvim" } },
	},
	{ -- Autocompletion
		"hrsh7th/nvim-cmp",
		dependencies = { "hrsh7th/cmp-nvim-lsp", "L3MON4D3/LuaSnip", "saadparwaiz1/cmp_luasnip" },
	},
	{ "hrsh7th/cmp-buffer" },
	{ "hrsh7th/cmp-path" },
	{ "hrsh7th/cmp-nvim-lua" },
	{
		"glepnir/lspsaga.nvim",
		branch = "main",
	},
	-- Snippet Collection (Optional)
	{ "rafamadriz/friendly-snippets" },
	{ "folke/lsp-colors.nvim" },
	{ "jubnzv/virtual-types.nvim" },
}
