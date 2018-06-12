package cl.ewebs.pblog.api.mappers;

import cl.ewebs.pblog.api.model.TaskDTO;
import cl.ewebs.pblog.domain.Task;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

    Task dtoToDomain(TaskDTO taskDTO);

    TaskDTO domainToDTO(Task task);
}
