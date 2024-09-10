-- Enable Comment.nvim
require("Comment").setup()

-- Enable `lukas-reineke/indent-blankline.nvim`
-- See `:help indent_blankline.txt`
require("ibl").setup()

-- Gitsigns
-- See `:help gitsigns.txt`
require("gitsigns").setup({
	signs = {
		add = { text = "+" },
		change = { text = "~" },
		delete = { text = "_" },
		topdelete = { text = "‾" },
		changedelete = { text = "~" },
	},
	on_attach = function(bufnr)
		local gs = package.loaded.gitsigns

    local function map(mode, l, r, opts)
      opts = opts or {}
      opts.buffer = bufnr
      vim.keymap.set(mode, l, r, opts)
    end
		map('n', '<leader>tb', gs.toggle_current_line_blame)
		map('n', '<leader>hb', function() gs.blame_line{full=true} end)
	end
})

require("catppuccin").setup({
	integrations = {
		fidget = true,
		gitsigns = true,
		lsp_saga = true,
		markdown = true,
		mini = true,
		mason = true,
		neotree = true,
		telescope = true,
		treesitter = true,
		treesitter_context = true,
		which_key = true,
	},
	transparent_background = true,
	dim_inactive = {
		enabled = false,
		shade = "dark",
		percentage = 0.05,
	},
})

