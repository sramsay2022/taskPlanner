package com.taskPlanner.demo.Task;

import lombok.*;
import java.util.UUID;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private UUID id;


}
