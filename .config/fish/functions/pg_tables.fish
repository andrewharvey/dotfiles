function pg_tables
	"psql $1 -c '\dt *.*'" $argv; 
end
