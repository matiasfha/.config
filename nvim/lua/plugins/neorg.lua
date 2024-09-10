return {
    "nvim-neorg/neorg",
    build = ":Neorg sync-parsers",
    dependencies = {
		"nvim-treesitter/nvim-treesitter",
		"nvim-treesitter/nvim-treesitter-textobjects",
		"nvim-cmp",
		"nvim-lua/plenary.nvim",
		{ "nvim-neorg/neorg-telescope" }
	},
	cmd = "Neorg",
	ft = "norg",
    config = function()
      require("neorg").setup {
        load = {
			["core.defaults"] = {}, -- Loads default behaviour
			["core.concealer"] = { config = { icon_preset = "diamond" , icons = {
			  todo = {
			    done ={ icon = "✅)" },
			    undone = { icon = "❌)" },
			  }
			}}},
			["core.export"] = {},
			["core.completion"] = { config = { engine = "nvim-cmp", name = "[Norg]" } },
	["core.integrations.nvim-cmp"] = {},
	["core.summary"] = {},
			["core.dirman"] = { -- Manages Neorg workspaces
				config = {
				  workspaces = {
					notes = "~/Documents/notes",
				  },
				  default_workspace = "notes"
				},
			},
        },
      }
    end,
}
