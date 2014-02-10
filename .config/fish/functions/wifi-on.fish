function wifi-on
	sudo rfkill unblock wifi $argv; 
end
