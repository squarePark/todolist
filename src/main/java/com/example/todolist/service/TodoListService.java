package com.example.todolist.service;

import com.example.todolist.domain.TodoDomain;
import com.example.todolist.domain.TodoListRepository;
import org.springframework.stereotype.Service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.List;
import java.util.Optional;


@Service
public class TodoListService {
    private static final Logger logger = LogManager.getLogger(TodoListService.class);
    private final TodoListRepository todoListRepository;

    public TodoListService(TodoListRepository todoListRepository) {
        this.todoListRepository = todoListRepository;
    }

    public List<TodoDomain> findByTodoList() {
        return  this.todoListRepository.findAllByOrderByOrderNumberAsc();
    }

    public Optional<TodoDomain> findByTodoDetail(int id) {
        return this.todoListRepository.findById(id);
    }

    public TodoDomain saveTodoList(TodoDomain todoDomain) {
        return this.todoListRepository.save(todoDomain);
    }

    public void deleteTodoList(int id) {
        this.todoListRepository.deleteById(id);
    }

}
