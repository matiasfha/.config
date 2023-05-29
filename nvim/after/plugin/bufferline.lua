local status, bufferline = pcall(require, "bufferline")
if not status then
	return
end

local colors = {
	fg = "#76787d",
	bg = "#252829",
}
local mocha = require("catppuccin.palettes").get_palette "mocha"
bufferline.setup({
	options = {
		show_close_icon = false,
		numbers = "ordinal",
		indicator = {
			style = "underline",
		},
		diagnostics = "nvim_lsp",
		offsets = {
			{
				filetype = "neo-tree",
				text = "  Project",
				highlight = "Directory",
				text_align = "left",
			},
			{
				filetype = "undotree",
				text = "Undotree",
				highlight = "PanelHeading",
				padding = 1,
			},
			{
				filetype = "NvimTree",
				text = "Explorer",
				highlight = "PanelHeading",
				padding = 1,
			},
			{
				filetype = "packer",
				text = "Packer",
				highlight = "PanelHeading",
				padding = 1,
			},
		},
		highlights = require("catppuccin.groups.integrations.bufferline").get({
			styles = { "italic", "bold" },
			custom = {
				all = {
					fill = { bg = "#000000" },
				},
				mocha = {
					background = { fg = mocha.text },
				},
				latte = {
					background = { fg = "#000000" },
				},
			},
		}),
		-- highlights = {
		-- 	fill = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	background = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	tab = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	tab_close = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	tab_separator = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	tab_separator_selected = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 		sp = colors.fg,
		-- 	},
		-- 	close_button = {
		-- 		bg = colors.bg,
		-- 		fg = colors.fg,
		-- 	},
		-- 	close_button_visible = {
		-- 		bg = colors.bg,
		-- 		fg = colors.fg,
		-- 	},
		-- 	close_button_selected = {
		-- 		fg = { attribute = "fg", highlight = "StatusLineNonText" },
		-- 	},
		-- 	buffer_visible = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	modified = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	modified_visible = {
		-- 		bg = colors.bg,
		-- 	},
		-- 	duplicate = {
		-- 		fg = colors.fg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	duplicate_visible = {
		-- 		fg = colors.fg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	separator = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	separator_selected = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	separator_visible = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 	},
		-- 	offset_separator = {
		-- 		fg = colors.bg,
		-- 		bg = colors.bg,
		-- 	},
		-- },
	},
})
