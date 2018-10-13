package cl.ejeldes.pblog.services;

import cl.ejeldes.pblog.api.model.TaskDTO;
import cl.ejeldes.pblog.domain.Task;
import cl.ejeldes.pblog.exceptions.ResourceNotFoundException;
import cl.ejeldes.pblog.repositories.TaskRepository;
import cl.ejeldes.pblog.api.mappers.TaskMapper;
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
                .orElseThrow(ResourceNotFoundException::new);
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

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    @Override
    public TaskDTO updateTask(Long id, TaskDTO taskDTO) {
        Task task = taskMapper.taskDTOToTask(taskDTO);
        task.setId(id);
        return taskMapper.taskToTaskDTO(taskRepository.save(task));

    }
}
