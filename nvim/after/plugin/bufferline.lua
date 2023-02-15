local status, bufferline = pcall(require, "bufferline")
if not status then
	return
end


bufferline.setup {
	options = {
		numbers = "ordinal",
		indicator = {
			style = "underline"
		},
		diagnostics = "nvim_lsp",
		offsets = {
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
		}
	}
}
