package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.model.TaskDTO;

import java.util.List;

public interface TaskService {

    TaskDTO findTaskById(Long id);

    TaskDTO saveTask(TaskDTO taskDTO);

    List<TaskDTO> getAllTasks();

    void deleteTask(Long id);

    TaskDTO updateTask(Long id, TaskDTO taskDTO);

}
