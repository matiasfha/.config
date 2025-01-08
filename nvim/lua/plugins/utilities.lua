return {
	{ "mbbill/undotree" },

	-- Bufferline
	{ "akinsho/bufferline.nvim", version = "*", dependencies = "nvim-tree/nvim-web-devicons" },
	-- status line
	{
		"nvim-lualine/lualine.nvim",
	}, -- Fancier statusline

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
	-- { "sunjon/shade.nvim" },
	{
		'knubie/vim-kitty-navigator',
		enabled = true
	},
	-- -- smooth scrolling
	-- {
	-- 	"karb94/neoscroll.nvim",
	-- 	config = function()
	-- 		require("neoscroll").setup()
	-- 	end,
	-- },
	-- file viewer
	{
		"nvim-neo-tree/neo-tree.nvim",
		dependencies = {
			"nvim-lua/plenary.nvim",
			"nvim-tree/nvim-web-devicons",
			"MunifTanjim/nui.nvim",
		},
		event = "VeryLazy",
		keys = {
			{ "<leader>e", ":Neotree toggle<CR>", silent = true, desc = "File Explorer" },
		},
		config = function()
			require("neo-tree").setup({
				close_if_last_window = true,
				popup_border_style = "single",
				enable_git_status = true,
				enable_modified_markers = true,
				enable_diagnostics = false,
				sort_case_insensitive = true,
				default_component_configs = {
					indent = {
						with_markers = false,
						with_expanders = true,
					},
					modified = {
						symbol = " ",
						highlight = "NeoTreeModified",
					},
					icon = {
						folder_closed = "",
						folder_open = "",
						folder_empty = "",
						folder_empty_open = "",
					},
					git_status = {
						symbols = {
							-- Change type
							added = "",
							deleted = "",
							modified = "",
							renamed = "",
							-- Status type
							untracked = "",
							ignored = "",
							unstaged = "",
							staged = "",
							conflict = "",
						},
					},
				},
				window = {
					position = "right",
					width = 35,
				},
				filesystem = {
					use_libuv_file_watcher = true,
					filtered_items = {
						hide_dotfiles = false,
						hide_gitignored = false,
						hide_by_name = {
							"node_modules",
						},
						never_show = {
							".DS_Store",
							"thumbs.db",
						},
					},
				},
				event_handlers = {
					{
						event = "file_opened",
						handler = function()
							--auto close
							require("neo-tree").close_all()
						end,
					},
					{
						event = "neo_tree_window_after_open",
						handler = function(args)
							if args.position == "left" or args.position == "right" then
								vim.cmd("wincmd =")
							end
						end,
					},
					{
						event = "neo_tree_window_after_close",
						handler = function(args)
							if args.position == "left" or args.position == "right" then
								vim.cmd("wincmd =")
							end
						end,
					},
				},
			})
		end,
	},
	{
		"echasnovski/mini.animate",
		version = "*",
		config = function()
			require("mini.animate").setup()
		end,
	},
	{
		"folke/persistence.nvim",
		event = "BufReadPre", -- this will only start session saving when an actual file was opened
		opts = {
			-- add any custom options here
		},
	},
	{ "echasnovski/mini.starter", version = "*", dependencies = "folke/persistence.nvim" },
	-- {
	-- 	"m4xshen/hardtime.nvim",
	-- 	config = function()
	-- 		require("hardtime").setup({ disable_mouse = false })
	-- 	end,
	-- }, -- cause I'm insane
	{
    "rcarriga/nvim-notify",
    config = function()
      require("notify").setup({
        background_colour = "#000000",
        enabled = false,
      })
    end
  },

  {
    "folke/noice.nvim",
    config = function()
      require("noice").setup({
        -- add any options here
        routes = {
          {
            filter = {
              event = 'msg_show',
              any = {
                { find = '%d+L, %d+B' },
                { find = '; after #%d+' },
                { find = '; before #%d+' },
                { find = '%d fewer lines' },
                { find = '%d more lines' },
              },
            },
            opts = { skip = true },
          }
        },
      })
    end,
    dependencies = {
      -- if you lazy-load any plugin below, make sure to add proper `module="..."` entries
      "MunifTanjim/nui.nvim",
      -- OPTIONAL:
      --   `nvim-notify` is only needed, if you want to use the notification view.
      --   If not available, we use `mini` as the fallback
      "rcarriga/nvim-notify",
    }
  },
}
