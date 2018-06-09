package cl.ewebs.pblog.controller;

import cl.ewebs.pblog.exceptions.ResourceNotFoundException;
import cl.ewebs.pblog.services.TaskService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class RestResponseEntityExceptionHandlerTest {

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
    public void handleNotFoundException() throws Exception {
        when(taskService.findTaskById(anyLong())).thenThrow(ResourceNotFoundException.class);

        mockMvc.perform(get(URL_TASKS + "/50")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.errors", hasSize(1)));
    }

    @Test
    public void handleMissingServletRequestParameter() {
    }

    @Test
    public void handleMethodArgumentTypeMismatch() throws Exception {
        mockMvc.perform(get(URL_TASKS + "/asd")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errors", hasSize(1)));
    }

    @Test
    public void handleConstraintViolation() {
    }

    @Test
    public void handleHttpRequestMethodNotSupported() throws Exception {
        mockMvc.perform(put(URL_TASKS)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isMethodNotAllowed())
                .andExpect(jsonPath("$.errors", hasSize(1)));
    }
}