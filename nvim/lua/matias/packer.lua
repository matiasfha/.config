-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd([[packadd packer.nvim]])

-- Telescope
local telescope = {
	{
		"nvim-telescope/telescope.nvim",
		tag = "0.1.0",
		requires = { { "nvim-lua/plenary.nvim" } },
	},
	-- Fuzzy Finder Algorithm which requires local dependencies to be built. Only load if `make` is available
	{ "nvim-telescope/telescope-fzf-native.nvim", run = "make", cond = vim.fn.executable("make") == 1 },
	{
		"AckslD/nvim-neoclip.lua",
		config = function()
			require("neoclip").setup()
		end,
	},
	"nvim-telescope/telescope-file-browser.nvim",
	{
		"princejoogie/dir-telescope.nvim",
		config = function()
			require("dir-telescope").setup({
				hidden = true,
				respect_gitignore = true,
			})
		end,
	},
}

-- Treesitter
local treesitter = {

	{ -- Highlight, edit, and navigate code
		"nvim-treesitter/nvim-treesitter",
		run = function()
			pcall(require("nvim-treesitter.install").update({ with_sync = true }))
		end,
	},

	{ -- Additional text objects via treesitter
		"nvim-treesitter/nvim-treesitter-textobjects",
		after = "nvim-treesitter",
	},

	{
		"folke/twilight.nvim",
		config = function()
			require("twilight").setup({
				dimming = {
					alpha = 0.40,
				},
			})
		end,
	},
	{
		"RRethy/vim-illuminate",
	},
}

-- Git plugins
local git = {
	"tpope/vim-fugitive",
	"tpope/vim-rhubarb",
	"lewis6991/gitsigns.nvim",
}

-- LSP
local lsp = {
	{ -- LSP Configuration & Plugins
		"neovim/nvim-lspconfig",
		requires = {
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
		requires = { { "nvim-lua/plenary.nvim" } },
	},
	{ -- Autocompletion
		"hrsh7th/nvim-cmp",
		requires = { "hrsh7th/cmp-nvim-lsp", "L3MON4D3/LuaSnip", "saadparwaiz1/cmp_luasnip" },
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

-- COPILOT
local copilot = {
	{
		"zbirenbaum/copilot.lua",
		event = { "VimEnter" },
		config = function()
			vim.defer_fn(function()
				require("copilot").setup({})
			end, 100)
		end,
	},

	{ "zbirenbaum/copilot-cmp", after = { "copilot.lua", "nvim-cmp" } },
}

-- markdown
local markdown = {
	{ "folke/zen-mode.nvim" },
	{
		"iamcco/markdown-preview.nvim",
		run = "cd app && npm install",
		ft = "markdown",
		config = function()
			vim.g.mkdp_auto_start = 1
		end,
		setup = function()
			vim.g.mkdp_filetypes = { "markdown" }
		end,
	},
	{ "godlygeek/tabular" },
	{ "preservim/vim-markdown" },
}

local editing = {
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

local utilities = {
	{ "mbbill/undotree" },

	-- Bufferline
	{ "akinsho/bufferline.nvim", tag = "v3.*", requires = "nvim-tree/nvim-web-devicons" },
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
local plugins = {
	telescope,
	treesitter,
	git,
	lsp,
	markdown,
	copilot,
	editing,
	utilities,
}

return require("packer").startup({
	function(use)
		-- Packer can manage itself
		use("wbthomason/packer.nvim")

		for _, items in ipairs(plugins) do
			for _, plugin in ipairs(items) do
				use(plugin)
			end
		end
		-- colorscheme
		use("folke/tokyonight.nvim")

		-- use({
		--   "nvim-tree/nvim-tree.lua",
		--   requires = {
		--     "nvim-tree/nvim-web-devicons", -- optional, for file icons
		--   },
		--   tag = "nightly", -- optional, updated every week. (see issue #1193)
		-- })
	end,
	config = {
		display = {
			open_fn = function()
				return require("packer.util").float({ border = "single" })
			end,
		},
	},
})
