package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.model.UserDTO;

import java.security.Principal;

public interface UserService {

    UserDTO findUserById(String id, Principal principal);

    UserDTO saveUser(UserDTO dto);

    UserDTO updateUser(String id, UserDTO dto, Principal principal);

    void deleteUser(String id, Principal principal);
}
