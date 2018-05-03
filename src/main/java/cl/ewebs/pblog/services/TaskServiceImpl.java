package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.mappers.TaskMapper;
import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    @Override
    public TaskDTO findTaskById(Long id) {
        return taskRepository.findById(id)
                .map(taskMapper::taskToTaskDTO)
                .orElseThrow(RuntimeException::new);
    }

    @Override
    public TaskDTO saveTask(TaskDTO taskDTO) {
        return taskMapper.taskToTaskDTO(
                taskRepository.save(taskMapper.taskDTOToTask(taskDTO)));
    }

    @Override
    public List<TaskDTO> getAllTasks() {
        return taskRepository.findAll().stream()
                .map(taskMapper::taskToTaskDTO)
                .collect(Collectors.toList());
    }
}
