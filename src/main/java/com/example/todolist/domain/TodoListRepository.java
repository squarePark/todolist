package com.example.todolist.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TodoListRepository extends JpaRepository<TodoDomain, Integer> {
    public List<TodoDomain> findAllByOrderByOrderNumberAsc();
}
