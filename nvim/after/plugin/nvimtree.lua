local status, tree = pcall(require, "nvim-tree")
if not status then
	return
end

-- examples for your init.lua

-- disable netrw at the very start of your init.lua (strongly advised)
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1
-- set termguicolors to enable highlight groups

-- OR setup with some options
tree.setup({
	hijack_cursor = true,
	update_cwd = true,
	sync_root_with_cwd = true,
	sort_by = "case_sensitive",
	update_focused_file = {
		enable = true,
		update_root = true,
	},
	diagnostics = {
		enable = true,
	},
	git = {
		enable = true,
		ignore = true,
		timeout = 200,
	},
	view = {
		float = {
			enable = true,
				quit_on_focus_loss = true,
			open_win_config = {
				relative = "editor",
				border = "rounded",
				width = 100,
				height = 30,
				row = 10,
				col = 58,
			},
		},
		width = 30,
		hide_root_folder = false,
		signcolumn = "yes",
		side = "right",
		adaptive_size = false,
		number = true,
		relativenumber = true,
		mappings = {
			list = {
				{ key = "u", action = "dir_up" },
			},
		},
	},
	renderer = {
		group_empty = true,
		icons = {
			git_placement = "signcolumn",
			show = {
				file = true,
				folder = true,
				folder_arrow = true,
				git = true,
			},
		},
	},
	filters = {
		dotfiles = false,
	},
	filesystem_watchers = {
		enable = true,
		ignore_dirs = {
			".*/node_modules/.*",
		},
	},
	actions = {
		use_system_clipboard = true,
		remove_file = {
			close_window = false,
		},
		change_dir = {
			enable = true,
			global = false,
			restrict_above_cwd = false,
		},
		open_file = {
			quit_on_open = true,
			resize_window = false,
			window_picker = {
				enable = true,
				chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
				exclude = {
					filetype = { "notify", "packer", "qf", "diff", "fugitive", "fugitiveblame" },
					buftype = { "nofile", "terminal", "help" },
				},
			},
		},
	},
})
