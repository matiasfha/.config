return {
	-- { -- LSP Configuration & Plugins
	-- 	"neovim/nvim-lspconfig",
	-- 	dependencies = {
	-- 		-- Automatically install LSPs to stdpath for neovim
	-- 		"williamboman/mason.nvim",
	-- 		"williamboman/mason-lspconfig.nvim",
	--
	-- 		-- Useful status updates for LSP
	-- 		{
	-- 			"j-hui/fidget.nvim",
	-- 			config = function()
	-- 				require("fidget").setup({})
	-- 			end,
	-- 		},
	-- 		"folke/neodev.nvim",
	-- 	},
	-- },
	-- { --formaters
	-- 	"jose-elias-alvarez/null-ls.nvim",
	-- 	dependencies = { { "nvim-lua/plenary.nvim" } },
	-- },
	-- { -- Autocompletion
	-- 	"hrsh7th/nvim-cmp",
	-- 	dependencies = { "hrsh7th/cmp-nvim-lsp", "L3MON4D3/LuaSnip", "saadparwaiz1/cmp_luasnip" },
	-- },
	-- { "hrsh7th/cmp-path" },
	-- { "hrsh7th/cmp-nvim-lua" },
	{
		 'VonHeikemen/lsp-zero.nvim',
		    branch = 'v2.x',
		    dependencies = {
		      -- LSP Support
		      {'neovim/nvim-lspconfig'},             -- Required
			  {                                      -- Optional
				'williamboman/mason.nvim',
				build = function()
				  pcall(vim.cmd, 'MasonUpdate')
				end,
			  },
			  {'williamboman/mason-lspconfig.nvim'}, -- Optional

			  -- Autocompletion
			  {'hrsh7th/nvim-cmp'},     -- Required
			  {'hrsh7th/cmp-nvim-lsp'}, -- Required
			  {'L3MON4D3/LuaSnip'},     -- Required
				{ "hrsh7th/cmp-buffer" },
				{ "hrsh7th/cmp-nvim-lsp" },

				}
		  },
		{
			"glepnir/lspsaga.nvim",
			branch = "main",
		},
	-- -- Snippet Collection (Optional)
	-- { "rafamadriz/friendly-snippets" },
		{ "folke/lsp-colors.nvim" },
	-- { "jubnzv/virtual-types.nvim" },
	{
		"dnlhc/glance.nvim",
		config = function()
			require("glance").setup({
				theme = {
					enable = true,
					mode = "auto",
				},
				border = {
					enable = false,
					top_char = "─",
					bottom_char = "─",
				},
			})
		end,
		keys = {
			{ "gD", "<CMD>Glance definitions<CR>", desc = "Glance definitions" },
			{ "gR", "<CMD>Glance references<CR>", desc = "Glance references" },
			{ "gY", "<CMD>Glance type_definitions<CR>", desc = "Glance type_definitions" },
			{ "gM", "<CMD>Glance implementations<CR>", desc = "Glance implementations" },
		},
	},
}
