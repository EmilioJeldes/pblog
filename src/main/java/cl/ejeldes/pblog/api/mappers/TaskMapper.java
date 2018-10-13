package cl.ejeldes.pblog.api.mappers;

import cl.ejeldes.pblog.api.model.TaskDTO;
import cl.ejeldes.pblog.domain.Task;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TaskMapper {

    TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

    Task taskDTOToTask(TaskDTO taskDTO);

    TaskDTO taskToTaskDTO(Task task);
}
