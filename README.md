# markdown-pandoc-todo
Create a HTML ToDo-list from markdown files using markdown

## Which problem does this solve?

Assume you have a lot of tasks and information about those tasks that you want
to organize in a single HTML file. I have created this little ToDo-List/Script
for exactly those purpose.

# Requirements

In order to run this script correctly you need the following:

1. [Pandoc](https://github.com/jgm/pandoc)
1. [Template](https://github.com/tajmone/pandoc-goodies#pandoc-html5-templates)
   - The template is also in this repository, so you don't really need to 
     download it. Should you want to use the original file, you'd need to 
     change the template-file in the `create_files.sh`
1. A working Internet connection for the animations to work, since they use
   jQuery.

# Configuration

If you'd want to change something, you should try to do so using `000yaml.yaml`
first.
