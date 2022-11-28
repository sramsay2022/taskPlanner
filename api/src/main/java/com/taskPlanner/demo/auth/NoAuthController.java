package com.taskPlanner.demo.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public")
public class NoAuthController {

    @GetMapping()
    public String checkNoAuthConnection() {
        return "OK";
    }
}