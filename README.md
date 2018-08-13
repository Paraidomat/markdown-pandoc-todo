# markdown-pandoc-todo
Create a HTML ToDo-list from markdown files using pandoc

## Which problem does this solve?

Assume you have a lot of tasks and information about those tasks that you want
to organize in a single HTML file. I have created this little ToDo-List/Script
for exactly those purpose.

# Requirements

In order to run this script correctly you need the following:

1. [Pandoc](https://github.com/jgm/pandoc) in a quite new Version (2.x?)
1. [Template](https://github.com/tajmone/pandoc-goodies#pandoc-html5-templates)
   - The template is also in this repository, so you don't really need to 
     download it. Should you want to use the original file, you'd need to 
     change the template-file in the `create_files.sh`
1. A working Internet connection for the animations to work, since they use
   jQuery.

# Configuration

If you'd want to change something, you should try to do so using `000yaml.yaml`
first.

# Usage

Usage is quite simple with this one. For each task a new markdown-file (ending 
with `.md`) has to be created. It is important that these files begin with a
filename like `TTT_` and use a level 2 (and not a level 1) heading.

An example file could be `TTT_shopping_list.md`
```
## Shopping List

- Food
- Drinks
```

If you worked on a task and are waiting for some other thing to happen you 
change the filename to the prefix `WWW_`.

If you're done with all things regarding this task, just change the filename
prefix to `ZZZ_`.

Everytime you changed a file just run `./create_files.sh`, which will create
a `todo_list.html` which you can bookmark in your browser to check your todos.
If you open the webpage all task information will slide up at first. To show
the detailed information click on the heading - It will slide right down again.


# But there are already a ton of other Todo-List apps available

True. But most of them do not allow for several lines of information regarding
the task that you want to work on. In my ToDo List you even can use 
code-blocks and have all the advantages of markdown. How cool is that? :)

# Credit where it's due

The basic idea for this came from a [question on reddit](https://www.reddit.com/r/vim/comments/3bqwy0/can_you_suggest_good_todo_plugin_for_vim/cspf79p/)


