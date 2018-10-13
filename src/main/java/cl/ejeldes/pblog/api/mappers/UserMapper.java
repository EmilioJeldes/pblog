package cl.ejeldes.pblog.api.mappers;

import cl.ejeldes.pblog.domain.User;
import cl.ejeldes.pblog.api.model.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User dtoToDomain(UserDTO dto);

    UserDTO domainToDTO(User user);

}
