package cl.ejeldes.pblog.controller;

import cl.ejeldes.pblog.api.model.TaskDTO;
import cl.ejeldes.pblog.domain.Priority;
import cl.ejeldes.pblog.exceptions.ResourceNotFoundException;
import cl.ejeldes.pblog.services.TaskService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static cl.ejeldes.pblog.controller.AbstractRestControllerTest.asJsonString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TaskControllerTest {
    private static final String DESCRIPTION = "Some Description";
    private static final int DURATION = 4;
    private static final Long ID = 1L;
    private static final boolean STATE = true;
    private static final Priority PRIORITY = Priority.HIGH;
    private static final String NAME = "Some name";
    private static final String URL_TASKS = "/api/tasks";

    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(taskController)
                .setControllerAdvice(new RestResponseEntityExceptionHandler())
                .build();
    }

    @Test
    public void testGetAllTasks() throws Exception {
        // given
        List<TaskDTO> taskDTOS = Arrays.asList(new TaskDTO(), new TaskDTO(), new TaskDTO());

        // when
        when(taskService.getAllTasks()).thenReturn(taskDTOS);
        // then
        mockMvc.perform(get(URL_TASKS)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.tasks", hasSize(3)));
    }

    @Test
    public void testGetTaskById() throws Exception {
        // given
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setDuration(DURATION);
        taskDTO.setId(ID);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        when(taskService.findTaskById(anyLong())).thenReturn(taskDTO);

        // then
        mockMvc.perform(get(URL_TASKS + "/" + ID)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.description", equalTo(DESCRIPTION)))
                .andExpect(jsonPath("$.duration", equalTo(DURATION)))
                .andExpect(jsonPath("$.id", equalTo(1)))
                .andExpect(jsonPath("$.state", equalTo(STATE)))
                .andExpect(jsonPath("$.priority", equalTo("HIGH")));
    }

    @Test
    public void testCreateTask() throws Exception {
        // given
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setDuration(DURATION);
        taskDTO.setId(ID);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        // when
        when(taskService.saveTask(any(TaskDTO.class))).thenReturn(taskDTO);

        // then
        mockMvc.perform(post(URL_TASKS)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(taskDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.description", equalTo(DESCRIPTION)))
                .andExpect(jsonPath("$.duration", equalTo(DURATION)))
                .andExpect(jsonPath("$.id", equalTo(1)))
                .andExpect(jsonPath("$.state", equalTo(STATE)))
                .andExpect(jsonPath("$.priority", equalTo("HIGH")));
    }

    @Test
    public void testDeleteTask() throws Exception {
        mockMvc.perform(delete(URL_TASKS + "/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(taskService).deleteTask(anyLong());
    }

    @Test
    public void testUpdateTask() throws Exception {
        // given
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setId(ID);
        taskDTO.setDuration(DURATION);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        TaskDTO returnDTO = new TaskDTO();
        returnDTO.setDescription(DESCRIPTION);
        returnDTO.setDuration(DURATION);
        returnDTO.setId(ID);
        returnDTO.setPriority(PRIORITY);
        returnDTO.setState(STATE);
        returnDTO.setTaskName(NAME);


        // when
        when(taskService.updateTask(anyLong(), any(TaskDTO.class))).thenReturn(returnDTO);

        // then
        mockMvc.perform(put(URL_TASKS + "/" + ID)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(taskDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.description", equalTo(DESCRIPTION)))
                .andExpect(jsonPath("$.duration", equalTo(DURATION)))
                .andExpect(jsonPath("$.id", equalTo(1)))
                .andExpect(jsonPath("$.state", equalTo(STATE)))
                .andExpect(jsonPath("$.priority", equalTo("HIGH")));
    }

    @Test
    public void testGetTaskNotFound() throws Exception {
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setId(1L);

        when(taskService.findTaskById(anyLong())).thenThrow(ResourceNotFoundException.class);

        mockMvc.perform(get(URL_TASKS + "/1").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isNotFound());
    }
}