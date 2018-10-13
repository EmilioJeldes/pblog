package cl.ejeldes.pblog.services;

import cl.ejeldes.pblog.api.mappers.TaskMapper;
import cl.ejeldes.pblog.api.model.TaskDTO;
import cl.ejeldes.pblog.domain.Priority;
import cl.ejeldes.pblog.domain.Task;
import cl.ejeldes.pblog.exceptions.ResourceNotFoundException;
import cl.ejeldes.pblog.repositories.TaskRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

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

    @Test
    public void testDeleteTask() {
        // given
        Long id = 1L;

        // when
        taskRepository.deleteById(id);

        // then
        verify(taskRepository, times(1)).deleteById(anyLong());
    }

    @Test
    public void testUpdateTask() {
        // given
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setDuration(DURATION);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        Task task = new Task();
        task.setDescription(DESCRIPTION);
        task.setDuration(DURATION);
        task.setId(ID);
        task.setPriority(PRIORITY);
        task.setState(STATE);
        task.setTaskName(NAME);

        when(taskRepository.save(any(Task.class))).thenReturn(task);

        // when
        TaskDTO savedDTO = taskService.updateTask(ID, taskDTO);

        // then
        assertEquals(NAME, savedDTO.getTaskName());
        assertEquals(DURATION, savedDTO.getDuration());
        assertEquals(ID, savedDTO.getId());
        assertEquals(DESCRIPTION, savedDTO.getDescription());
        assertEquals(PRIORITY, savedDTO.getPriority());
    }

    @Test(expected = ResourceNotFoundException.class)
    public void testTaskNotFound() {
        // given
        Optional<Task> optionalTask = Optional.empty();

        // when
        when(taskRepository.findById(anyLong())).thenReturn(optionalTask);

        TaskDTO taskById = taskService.findTaskById(1L);
    }
}