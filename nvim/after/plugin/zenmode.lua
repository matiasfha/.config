
local status, zenmode = pcall(require, "zen-mode")
if not status then
	return
end
zenmode.setup {
	window = {
		width = .85
	},
	plugins = {
		kitty = {
			enabled = true
		}
	},
	options = {
		number = true,
		relativenumber = true
	}
}
