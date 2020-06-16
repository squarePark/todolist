package com.example.todolist.web;

import com.example.todolist.domain.TodoDomain;
import com.example.todolist.service.TodoListService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class TodoListController {

    private final TodoListService todoListService;

    public TodoListController(TodoListService todoListService) {
        this.todoListService = todoListService;
    }

    @GetMapping("/todolist")
    public List<TodoDomain> getTotoList() {
        return todoListService.findByTodoList();
    }

    @GetMapping("/todolist/detail/{id}")
    public Optional<TodoDomain> getTodoListDetail(@PathVariable("id") int id) {
        return todoListService.findByTodoDetail(id);
    }

    @PutMapping("/todolist/save")
    public TodoDomain saveTodoList(@RequestBody TodoDomain todoDomain) {
        return todoListService.saveTodoList(todoDomain);
    }

    @DeleteMapping("/todolist/delete/{id}")
    public void deleteTodoList(@PathVariable("id") int id) {
        todoListService.deleteTodoList(id);
    }

}
