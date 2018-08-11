pandoc.exe --toc --template template.html5 000yaml.yaml $(ls | grep .md | sort) -s -o todo_liste.html
