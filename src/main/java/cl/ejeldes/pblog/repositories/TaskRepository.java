package cl.ejeldes.pblog.repositories;

import cl.ejeldes.pblog.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {

    Optional<Task> findByTaskName(String name);

    List<Task> findByDuration(int duration);

}

