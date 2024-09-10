-- LSP settings.

local lsp = require("lsp-zero").preset({})
lsp.preset('recommended')
lsp.ensure_installed({
	'tsserver',
	'eslint',
})

local function filter(arr, fn)
  if type(arr) ~= "table" then
    return arr
  end

  local filtered = {}
  for k, v in pairs(arr) do
    if fn(v, k, arr) then
      table.insert(filtered, v)
    end
  end

  return filtered
end

local function filterReactDTS(value)
  return string.match(value.filename, 'react/index.d.ts') == nil
end


local function on_list(options)
  local items = options.items
  if #items > 1 then
    items = filter(items, filterReactDTS)
  end

  vim.fn.setqflist({}, ' ', { title = options.title, items = items, context = options.context })
  vim.api.nvim_command('cfirst') -- or maybe you want 'copen' instead of 'cfirst'
end


lsp.on_attach(function(client, bufnr)
     local opts = {buffer = bufnr, remap = false}
    local bufopts = { noremap=true, silent=true, buffer=bufnr }
	lsp.default_keymaps({ buffer = bufnr })
	vim.keymap.set('n', 'gd', function() vim.lsp.buf.definition{on_list=on_list} end, bufopts)
end)

-- (Optional) Configure lua language server for neovim
require("lspconfig").lua_ls.setup(lsp.nvim_lua_ls())

lsp.setup()

local cmp = require("cmp")
local cmp_action = require("lsp-zero").cmp_action()
cmp.setup({
	sources = {
		{ name = "nvim_lsp", group_index = 1 },
		-- Copilot Source
		{ name = "copilot", group_index = 2 },
		-- Other Sources
		{ name = "buffer", group_index = 3 },
		-- { name = "path", group_index = 3 },
		-- { name = "luasnip", group_index = 3 },
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
})

local saga = require("lspsaga")
local keymap = vim.keymap.set
saga.setup({
	ui = {
		kind = require("catppuccin.groups.integrations.lsp_saga").custom_kind(),
	},
})
-- Float terminal
-- keymap("n", "<A-d>", "<cmd>Lspsaga open_floaterm<CR>", { silent = true })
-- close floaterm
-- keymap("t", "<A-d>", [[<C-\><C-n><cmd>Lspsaga close_floaterm<CR>]], { silent = true })
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

-- --
-- -- nvim-cmp supports additional completion capabilities, so broadcast that to servers
-- local capabilities = vim.lsp.protocol.make_client_capabilities()
-- capabilities = require("cmp_nvim_lsp").default_capabilities(capabilities)
--
-- local cmp = require("cmp")
-- local luasnip = require("luasnip")
--
-- cmp.setup({
-- 	snippet = {
-- 		expand = function(args)
-- 			luasnip.lsp_expand(args.body)
-- 		end,
-- 	},
-- 	mapping = cmp.mapping.preset.insert({
-- 		["<C-d>"] = cmp.mapping.scroll_docs(-4),
-- 		["<C-f>"] = cmp.mapping.scroll_docs(4),
-- 		["<C-Space>"] = cmp.mapping.complete(),
-- 		["<CR>"] = cmp.mapping.confirm({
-- 			behavior = cmp.ConfirmBehavior.Replace,
-- 			select = true,
-- 		}),
-- 		["<Tab>"] = cmp.mapping(function(fallback)
-- 			if cmp.visible() then
-- 				cmp.select_next_item()
-- 			elseif luasnip.expand_or_jumpable() then
-- 				luasnip.expand_or_jump()
-- 			else
-- 				fallback()
-- 			end
-- 		end, { "i", "s" }),
-- 		["<S-Tab>"] = cmp.mapping(function(fallback)
-- 			if cmp.visible() then
-- 				cmp.select_prev_item()
-- 			elseif luasnip.jumpable(-1) then
-- 				luasnip.jump(-1)
-- 			else
-- 				fallback()
-- 			end
-- 		end, { "i", "s" }),
-- 	}),
-- 	sources = cmp.config.sources({
-- 		{ name = "nvim_lsp", group_index = 1 },
-- 		-- Copilot Source
-- 		{ name = "copilot", group_index = 2 },
-- 		-- Other Sources
-- 		{ name = "buffer", group_index = 3 },
-- 		{ name = "path", group_index = 3 },
-- 		{ name = "luasnip", group_index = 3 },
-- 	}),
-- })
-- -- FORMATTERS
-- local null_ls = require("null-ls")
-- local augroup = vim.api.nvim_create_augroup("LspFormatting", {})
-- null_ls.setup({
-- 	sources = {
-- 		null_ls.builtins.formatting.stylua,
-- 		null_ls.builtins.diagnostics.eslint.with({
-- 			filetypes = { "typescript", "typescriptreact", "javascriptreact", "javascript", "svelte" },
-- 			prefer_local = "node_modules/.bin",
-- 			condition = function(utils)
-- 				return utils.root_has_file({
-- 					".eslintrc.js",
-- 					".esintrc.cjs",
-- 					".eslintrc.yaml",
-- 					".eslintrc.yml",
-- 					".eslintrc.json",
-- 					"eslint.config.js",
-- 				})
-- 			end,
-- 		}),
-- 		null_ls.builtins.completion.spell,
-- 		null_ls.builtins.formatting.prettier.with({
-- 			filetypes = {
-- 				"css",
-- 				"graphql",
-- 				"html",
-- 				"json",
-- 				"yaml",
-- 				"markdown",
-- 				"typescript",
-- 				"typescriptreact",
-- 				"javascript",
-- 				"javascriptreact",
-- 				"svelte",
-- 			},
-- 			prefer_local = "node_modules/.bin",
-- 		}),
-- 		null_ls.builtins.diagnostics.write_good.with({
-- 			filetypes = { "markdown" },
-- 		}),
-- 	},
-- 	on_attach = function(client, buffer)
-- 		if client.supports_method("textDocument/formatting") then
-- 			vim.api.nvim_clear_autocmds({ group = augroup, buffer = buffer })
-- 			vim.api.nvim_create_autocmd("BufWritePre", {
-- 				group = augroup,
-- 				buffer = buffer,
-- 				callback = vim.lsp.buf.format,
-- 			})
-- 		end
-- 	end,
-- })
--
