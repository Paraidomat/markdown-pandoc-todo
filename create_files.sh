pandoc --toc --template="./template.html" -s -o todo_list.html 000yaml.yaml $(ls | grep .md | grep -v README | sort)
