# Project 3: Project React - Todo List

It's a Todo List based on project [TodoMVC](https://todomvc.com/examples/vanillajs/#/).

This is a group project created on bootcamp [Infoshare Academy](https://github.com/infoshareacademy/).

The project has two branches:

- local-storage
- json-server

Only on these branches the tasks created by user are saved.

## How to start

- On branch master or local storage

In the project directory, you can run

```
npm install
```

and next

```
npm start
```

- On branch json-server

In the project directory, you can run:

```
npm install
```

```
npm install -g json-server
```

```
json-server --watch todos.json --port 7000
```

and finally

```
npm start
```

### Below you can see the layout of application

![Todo1](/images/todo1.png)

## About application

This is an aplication to control your tasks. You can:

- add tasks
- change the status of tasks - complete / uncomplete
- edit name of tasks
- delete tasks
- filter tasks based on status
- change status of all tasks by clicking arrow
- delete completed tasks
