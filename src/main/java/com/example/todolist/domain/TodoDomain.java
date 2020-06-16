package com.example.todolist.domain;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name = "TBL_TODOLIST")
public class TodoDomain {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int orderNumber;
    private String title;
    private String content;

    @ColumnDefault("N")
    private String checkedYn;
    private String deadlineDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(int orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCheckedYn() {
        return checkedYn;
    }

    public void setCheckedYn(String checkedYn) {
        this.checkedYn = checkedYn;
    }

    public String getDeadlineDate() {
        return deadlineDate;
    }

    public void setDeadlineDate(String deadlineDate) {
        this.deadlineDate = deadlineDate;
    }
}
