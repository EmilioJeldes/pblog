package cl.ewebs.pblog.controller;

import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.api.model.TaskListDTO;
import cl.ewebs.pblog.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin
public class TaskController {

	private final TaskService taskService;

	@Autowired
	public TaskController(TaskService taskService) {
		this.taskService = taskService;
	}

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public TaskListDTO getAllTasks() {
		return new TaskListDTO(taskService.getAllTasks());
	}

	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public TaskDTO getTaskById(@PathVariable Long id) {
		return taskService.findTaskById(id);
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public TaskDTO createTask(@RequestBody TaskDTO taskDTO) {
		return taskService.saveTask(taskDTO);
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public TaskDTO updateTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
		return taskService.updateTask(id, taskDTO);
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void deleteTask(@PathVariable Long id) {
		taskService.deleteTask(id);
	}

}
