package cl.ewebs.pblog.api.mappers;

import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.domain.Task;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface TaskMapper {

    TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

    Task taskDTOToTask(TaskDTO taskDTO);

    TaskDTO taskToTaskDTO(Task task);
}
