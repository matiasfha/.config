-- LSP settings.
require("lspconfig").svelte.setup({})
local saga = require("lspsaga")
local keymap = vim.keymap.set
saga.setup({
	ui = {
		kind = require("catppuccin.groups.integrations.lsp_saga").custom_kind(),
	},
})
-- Float terminal
keymap("n", "<A-d>", "<cmd>Lspsaga open_floaterm<CR>", { silent = true })
-- close floaterm
keymap("t", "<A-d>", [[<C-\><C-n><cmd>Lspsaga close_floaterm<CR>]], { silent = true })
local nmap = function(keys, func, desc)
	if desc then
		desc = "LSP: " .. desc
	end

	vim.keymap.set("n", keys, func, { buffer = bufnr, desc = desc })
end

nmap("<leader>rn", "<cmd>Lspsaga rename<CR>", "[R]e[n]ame")
-- nmap("<leader>ca", vim.lsp.buf.code_action, "[C]ode [A]ction")
nmap("<leader>ca", "<cmd>Lspsaga code_action<cr>", "[C]ode [A]ction")

nmap("gd", vim.lsp.buf.definition, "[G]oto [D]efinition")
-- Peek Definition
-- you can edit the definition file in this flaotwindow
-- also support open/vsplit/etc operation check definition_action_keys
-- support tagstack C-t jump back
nmap("<leader>pd", "<cmd>Lspsaga peek_definition<CR>", "[P]eek [D]efinition")
nmap("<leader>ld", "<cmd>Lspsaga show_line_diagnostics<CR>", "[L]ine [D]iagnostics")
nmap("<leader>lc", "<cmd>Lspsaga show_cursor_diagnostics<CR>", "[C]ursor Diagnostics")

nmap("gr", require("telescope.builtin").lsp_references, "[G]oto [R]eferences")
nmap("gI", vim.lsp.buf.implementation, "[G]oto [I]mplementation")
nmap("<leader>D", vim.lsp.buf.type_definition, "Type [D]efinition")
nmap("<leader>ds", require("telescope.builtin").lsp_document_symbols, "[D]ocument [S]ymbols")
nmap("<leader>ws", require("telescope.builtin").lsp_dynamic_workspace_symbols, "[W]orkspace [S]ymbols")

-- See `:help K` for why this keymap
-- nmap("K", vim.lsp.buf.hover, "Hover Documentation")
nmap("K", "<cmd>Lspsaga hover_doc<CR>", "Hover Documentation")
--nmap("<C-k>", vim.lsp.buf.signature_help, "Signature Documentation")

-- Lesser used LSP functionality
nmap("gD", vim.lsp.buf.declaration, "[G]oto [D]eclaration")
nmap("<leader>wa", vim.lsp.buf.add_workspace_folder, "[W]orkspace [A]dd Folder")
nmap("<leader>wr", vim.lsp.buf.remove_workspace_folder, "[W]orkspace [R]emove Folder")
nmap("<leader>wl", function()
	print(vim.inspect(vim.lsp.buf.list_workspace_folders()))
end, "[W]orkspace [L]ist Folders")

--  This function gets run when an LSP connects to a particular buffer.
local on_attach = function(_, bufnr)
	-- NOTE: Remember that lua is a real programming language, and as such it is possible
	-- to define small helper and utility functions so you don't have to repeat yourself
	-- many times.
	--
	-- In this case, we create a function that lets us more easily define mappings specific
	-- for LSP related items. It sets the mode, buffer and description for us each time.
	-- Create a command `:Format` local to the LSP buffer
	vim.api.nvim_buf_create_user_command(bufnr, "Format", function(_)
		vim.lsp.buf.format()
	end, { desc = "Format current buffer with LSP" })
end

-- Enable the following language servers
--  Feel free to add/remove any LSPs that you want here. They will automatically be installed.
--
--  Add any additional override configuration in the following tables. They will be passed to
--  the `settings` field of the server config. You must look up that documentation yourself.
local servers = {
	-- clangd = {},
	-- gopls = {},
	-- pyright = {},
	-- rust_analyzer = {},
	tsserver = {},
}

-- Setup neovim lua configuration
require("neodev").setup()
--
-- nvim-cmp supports additional completion capabilities, so broadcast that to servers
local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require("cmp_nvim_lsp").default_capabilities(capabilities)

-- Setup mason so it can manage external tooling
require("mason").setup()

-- Ensure the servers above are installed
local mason_lspconfig = require("mason-lspconfig")

mason_lspconfig.setup({
	ensure_installed = vim.tbl_keys(servers),
	automatic_installation = {
		exclude = { "emmet_ls", "rust_analyzer" },
	},
})

mason_lspconfig.setup_handlers({
	function(server_name)
		require("lspconfig")[server_name].setup({
			capabilities = capabilities,
			on_attach = on_attach,
			settings = servers[server_name],
		})
	end,
})

-- nvim-cmp setup
local cmp = require("cmp")
local luasnip = require("luasnip")

cmp.setup({
	snippet = {
		expand = function(args)
			luasnip.lsp_expand(args.body)
		end,
	},
	mapping = cmp.mapping.preset.insert({
		["<C-d>"] = cmp.mapping.scroll_docs(-4),
		["<C-f>"] = cmp.mapping.scroll_docs(4),
		["<C-Space>"] = cmp.mapping.complete(),
		["<CR>"] = cmp.mapping.confirm({
			behavior = cmp.ConfirmBehavior.Replace,
			select = true,
		}),
		["<Tab>"] = cmp.mapping(function(fallback)
			if cmp.visible() then
				cmp.select_next_item()
			elseif luasnip.expand_or_jumpable() then
				luasnip.expand_or_jump()
			else
				fallback()
			end
		end, { "i", "s" }),
		["<S-Tab>"] = cmp.mapping(function(fallback)
			if cmp.visible() then
				cmp.select_prev_item()
			elseif luasnip.jumpable(-1) then
				luasnip.jump(-1)
			else
				fallback()
			end
		end, { "i", "s" }),
	}),
	sources = cmp.config.sources({
		-- Copilot Source
		{ name = "copilot", group_index = 2 },
		-- Other Sources
		{ name = "nvim_lsp", group_index = 2 },
		{ name = "path", group_index = 2 },
		{ name = "luasnip", group_index = 2 },
		{ name = "buffer", group_index = 2 },
	}),
})
-- FORMATTERS
local null_ls = require("null-ls")
local augroup = vim.api.nvim_create_augroup("LspFormatting", {})
null_ls.setup({
	sources = {
		null_ls.builtins.formatting.stylua,
		null_ls.builtins.diagnostics.eslint.with({
			filetypes = { "typescript", "typescriptreact", "javascriptreact", "javascript", "svelte" },
			prefer_local = "node_modules/.bin",
			condition = function(utils)
				return utils.root_has_file({
					".eslintrc.js",
					".esintrc.cjs",
					".eslintrc.yaml",
					".eslintrc.yml",
					".eslintrc.json",
					"eslint.config.js",
				})
			end,
		}),
		null_ls.builtins.completion.spell,
		null_ls.builtins.formatting.prettier.with({
			filetypes = {
				"css",
				"graphql",
				"html",
				"json",
				"yaml",
				"markdown",
				"typescript",
				"typescriptreact",
				"javascript",
				"javascriptreact",
				"svelte",
			},
			prefer_local = "node_modules/.bin",
		}),
		null_ls.builtins.diagnostics.write_good.with({
			filetypes = { "markdown" },
		}),
	},
	on_attach = function(client, buffer)
		if client.supports_method("textDocument/formatting") then
			vim.api.nvim_clear_autocmds({ group = augroup, buffer = buffer })
			vim.api.nvim_create_autocmd("BufWritePre", {
				group = augroup,
				buffer = buffer,
				callback = vim.lsp.buf.format,
			})
		end
	end,
})
