package cl.ewebs.pblog.api.mappers;

import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.domain.Priority;
import cl.ewebs.pblog.domain.Task;
import org.junit.Test;

import static org.junit.Assert.*;

public class TaskMapperTest {

    private static final String DESCRIPTION = "Some Description";
    private static final int DURATION = 4;
    private static final Long ID = 1L;
    private static final boolean STATE = true;
    private static final Priority PRIORITY = Priority.HIGH;
    private static final String NAME = "Some name";
    private TaskMapper taskMapper = TaskMapper.INSTANCE;

    @Test
    public void testTaskDTOToTask() {
        // given
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setDescription(DESCRIPTION);
        taskDTO.setDuration(DURATION);
        taskDTO.setId(ID);
        taskDTO.setPriority(PRIORITY);
        taskDTO.setState(STATE);
        taskDTO.setTaskName(NAME);

        // when
        Task task = taskMapper.dtoToDomain(taskDTO);

        // then
        assertEquals(taskDTO.getTaskName(), task.getTaskName());
        assertEquals(taskDTO.getDuration(), task.getDuration());
        assertEquals(taskDTO.getDescription(), task.getDescription());
        assertEquals(taskDTO.getId(), task.getId());
        assertEquals(taskDTO.getPriority(), task.getPriority());
        assertEquals(taskDTO.isState(), task.isState());
    }

    @Test
    public void testTaskToTaskDTO() {
        // given
        Task task = new Task();
        task.setDescription(DESCRIPTION);
        task.setDuration(DURATION);
        task.setId(ID);
        task.setPriority(PRIORITY);
        task.setState(STATE);
        task.setTaskName(NAME);

        // when
        TaskDTO taskDTO = taskMapper.domainToDTO(task);

        // then
        assertEquals(taskDTO.getPriority(), task.getPriority());
        assertEquals(taskDTO.getId(), task.getId());
        assertEquals(taskDTO.getTaskName(), task.getTaskName());
        assertEquals(taskDTO.getDescription(), task.getDescription());
        assertEquals(taskDTO.getDuration(), task.getDuration());
        assertEquals(taskDTO.isState(), task.isState());
    }
}