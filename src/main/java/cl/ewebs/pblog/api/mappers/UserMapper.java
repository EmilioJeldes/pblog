package cl.ewebs.pblog.api.mappers;

import cl.ewebs.pblog.api.model.UserDTO;
import cl.ewebs.pblog.domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User dtoToDomain(UserDTO dto);

    UserDTO domainToDTO(User user);

}
