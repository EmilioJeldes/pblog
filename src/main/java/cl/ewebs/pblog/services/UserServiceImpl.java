package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.mappers.UserMapper;
import cl.ewebs.pblog.api.model.UserDTO;
import cl.ewebs.pblog.domain.User;
import cl.ewebs.pblog.exceptions.ResourceNotAllowedException;
import cl.ewebs.pblog.exceptions.ResourceNotFoundException;
import cl.ewebs.pblog.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDTO findUserById(String id, Principal principal) {
        if (principal.getName().equals(id)) {
            return userRepository.findById(id)
                    .map(userMapper::domainToDTO)
                    .orElseThrow(ResourceNotFoundException::new);
        } else {
            throw new ResourceNotAllowedException();
        }
    }

    @Override
    public UserDTO saveUser(UserDTO dto) {
        return userMapper.domainToDTO(userRepository.save(userMapper.dtoToDomain(dto)));
    }

    @Override
    public UserDTO updateUser(String id, UserDTO dto, Principal principal) {
        if (principal.getName().equals(id)) {
            User user = userMapper.dtoToDomain(dto);
            user.setId(id);
            return userMapper.domainToDTO(userRepository.save(user));
        } else {
            throw new ResourceNotAllowedException();
        }
    }

    @Override
    public void deleteUser(String id, Principal principal) {
        if (principal.getName().equals(id)) {
            userRepository.deleteById(id);
        } else {
            throw new ResourceNotAllowedException();
        }
    }
}
