package com.taskPlanner.demo.auth;

import com.taskPlanner.demo.annotations.AuthenticatedRestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@AuthenticatedRestController
@RequestMapping("/status")
public class StatusController {

    @GetMapping
    public String getStatus() {
        return "OK";
    }
}
