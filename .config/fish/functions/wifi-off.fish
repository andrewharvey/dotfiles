function wifi-off
	sudo rfkill block all $argv; 
end
