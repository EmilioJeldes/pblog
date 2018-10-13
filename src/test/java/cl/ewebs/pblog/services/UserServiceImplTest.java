package cl.ewebs.pblog.services;

import cl.ewebs.pblog.api.mappers.UserMapper;
import cl.ewebs.pblog.api.model.UserDTO;
import cl.ewebs.pblog.domain.User;
import cl.ewebs.pblog.repositories.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.security.Principal;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

public class UserServiceImplTest {

    private static final String ID = "123456789";
    private static final String EMAIL = "email@email.com";
    private static final String GENDER = "male";
    private static final String IMAGE_URL = "http://image.com";
    private static final String LANG = "es";
    private static final String NAME = "Emilio";
    private static final String LAST_NAME = "Jeldes";

    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        userService = new UserServiceImpl(userRepository, UserMapper.INSTANCE);
    }

    @Test
    public void findUserById() {
        // given
        Principal principal = () -> ID;
        User user = getUser();
        when(userRepository.findById(anyString())).thenReturn(Optional.of(user));

        // when
        UserDTO dto = userService.findUserById(ID, principal);

        // then
        assertEquals(ID, dto.getId());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(GENDER, dto.getGender());
        assertEquals(IMAGE_URL, dto.getImageUrl());
        assertEquals(LANG, dto.getLanguage());
        assertEquals(NAME, dto.getName());
        assertEquals(LAST_NAME, dto.getLastName());
    }

    @Test
    public void saveUser() {
        // given
        User user = getUser();
        UserDTO userDTO = getUserDTO();
        when(userRepository.save(any(User.class))).thenReturn(user);

        // when
        UserDTO dto = userService.saveUser(userDTO);

        // then
        assertEquals(ID, dto.getId());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(GENDER, dto.getGender());
        assertEquals(IMAGE_URL, dto.getImageUrl());
        assertEquals(LANG, dto.getLanguage());
        assertEquals(NAME, dto.getName());
        assertEquals(LAST_NAME, dto.getLastName());
    }

    @Test
    public void updateUser() {
        // given
        Principal principal = () -> ID;
        UserDTO userDTO = getUserDTO();
        User user = getUser();
        when(userRepository.save(any(User.class))).thenReturn(user);

        // when
        UserDTO dto = userService.updateUser(ID, userDTO, principal);

        // then
        assertEquals(ID, dto.getId());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(GENDER, dto.getGender());
        assertEquals(IMAGE_URL, dto.getImageUrl());
        assertEquals(LANG, dto.getLanguage());
        assertEquals(NAME, dto.getName());
        assertEquals(LAST_NAME, dto.getLastName());
    }

    @Test
    public void deleteUser() {
        // given
        Principal principal = () -> ID;

        // when
        userService.deleteUser(ID, principal);

        // then
        verify(userRepository, times(1)).deleteById(anyString());

    }

    private UserDTO getUserDTO() {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(ID);
        userDTO.setEmail(EMAIL);
        userDTO.setGender(GENDER);
        userDTO.setImageUrl(IMAGE_URL);
        userDTO.setLanguage(LANG);
        userDTO.setName(NAME);
        userDTO.setLastName(LAST_NAME);
        return userDTO;
    }

    private User getUser() {
        User user = new User();
        user.setId(ID);
        user.setEmail(EMAIL);
        user.setGender(GENDER);
        user.setImageUrl(IMAGE_URL);
        user.setLanguage(LANG);
        user.setName(NAME);
        user.setLastName(LAST_NAME);
        return user;
    }
}