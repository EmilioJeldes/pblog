package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.mappers.TaskMapper;
import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.domain.Priority;
import cl.ewebs.pblog.domain.Task;
import cl.ewebs.pblog.repositories.TaskRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

public class TaskServiceImplTest {

    private static final String DESCRIPTION = "Some Description";
    private static final int DURATION = 4;
    private static final Long ID = 1L;
    private static final boolean STATE = true;
    private static final Priority PRIORITY = Priority.HIGH;
    private static final String NAME = "Some name";
    private TaskService taskService;

    @Mock
    private TaskRepository taskRepository;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);

        taskService = new TaskServiceImpl(taskRepository, TaskMapper.INSTANCE);
    }

    @Test
    public void testFindTaskById() {
        // given
        Task task = new Task();
        task.setDescription(DESCRIPTION);
        task.setDuration(DURATION);
        task.setId(ID);
        task.setPriority(PRIORITY);
        task.setState(STATE);
        task.setTaskName(NAME);

        Optional<Task> optionalTask = Optional.of(task);
        when(taskRepository.findById(anyLong())).thenReturn(optionalTask);

        // when
        TaskDTO taskDTO = taskService.findTaskById(ID);

        // then
        assertEquals(task.getDescription(), taskDTO.getDescription());
        assertEquals(task.getDuration(), taskDTO.getDuration());
        assertEquals(task.getId(), taskDTO.getId());
        assertEquals(task.getPriority(), taskDTO.getPriority());
        assertEquals(task.getTaskName(), taskDTO.getTaskName());
        assertEquals(task.isState(), taskDTO.isState());
    }

    @Test
    public void testSaveTask() {
        // given
        Task task = new Task();
        task.setDescription(DESCRIPTION);
        task.setDuration(DURATION);
        task.setId(ID);
        task.setPriority(PRIORITY);
        task.setState(STATE);
        task.setTaskName(NAME);

        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setDuration(DURATION);
        taskDTO.setId(ID);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        when(taskRepository.save(any(Task.class))).thenReturn(task);

        // when
        TaskDTO savedTask = taskService.saveTask(taskDTO);

        // then
        assertEquals(task.getTaskName(), savedTask.getTaskName());
        assertEquals(task.getPriority(), savedTask.getPriority());
        assertEquals(task.getId(), savedTask.getId());
        assertEquals(task.getDuration(), savedTask.getDuration());
        assertEquals(task.getDescription(), savedTask.getDescription());
        assertEquals(task.isState(), savedTask.isState());
    }

    @Test
    public void testGetAllTasks() {
        // given
        List<Task> tasks = Arrays.asList(new Task(), new Task(), new Task());
        when(taskRepository.findAll()).thenReturn(tasks);

        // when
        List<TaskDTO> taskDTOS = taskService.getAllTasks();
        // then
        assertEquals(3, taskDTOS.size());
    }
}