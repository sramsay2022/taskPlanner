package com.taskPlanner.demo.Task;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/status")
public class Service {

    @GetMapping("/status")
    public String getStatus() {
        return "OK";
    }
}
