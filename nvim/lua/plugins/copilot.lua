return {
	{
		"zbirenbaum/copilot.lua",
		event = { "VimEnter" },
		config = function()
			vim.defer_fn(function()
				require("copilot").setup({
					suggestion = { enabled = false },
					panel = { enabled = false },
				})
			end, 100)
		end,
	},

	{
		"zbirenbaum/copilot-cmp",
		dependencies = { { "copilot.lua" }, { "nvim-cmp" } },
		config = function()
			require("copilot_cmp").setup()
		end,
	},
}
