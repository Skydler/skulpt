update_pedal:
	cp -R C:/Users/acbart/Projects/pedal/pedal/ C:/Users/acbart/Projects/skulpt/src/lib/ ; rm src/lib/pedal/cait/ast_dump_magic.py ; python skulpt.py dist --compile