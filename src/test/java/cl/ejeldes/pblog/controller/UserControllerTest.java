package cl.ejeldes.pblog.controller;

import cl.ejeldes.pblog.api.model.UserDTO;
import cl.ejeldes.pblog.services.UserService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.security.Principal;

import static cl.ejeldes.pblog.controller.AbstractRestControllerTest.asJsonString;
import static org.hamcrest.Matchers.equalTo;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


public class UserControllerTest {

    private static final String USER_URL = "/api/users";
    private static final String ID = "123456789";
    private static final String EMAIL = "mail@mail.com";
    private static final String NAME = "Emilio";
    private static final String LAST_NAME = "Jeldes";
    private static final String IMAGE_URL = "http://image.url";
    private static final String GENDER = "male";
    private static final String LANG = "es";

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {

        MockitoAnnotations.initMocks(this);

        mockMvc = MockMvcBuilders.standaloneSetup(userController)
                .setControllerAdvice(new RestResponseEntityExceptionHandler())
                .build();
    }

    @Test
    public void testGetUser() throws Exception {
        // given
        UserDTO userDTO = getDTO();
        Principal principal = () -> ID;

        // when
        when(userService.findUserById(anyString(), any(Principal.class))).thenReturn(userDTO);

        // then
        mockMvc.perform(get(USER_URL + "/" + ID)
                .contentType(MediaType.APPLICATION_JSON)
                .principal(principal))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email", equalTo(EMAIL)))
                .andExpect(jsonPath("$.name", equalTo(NAME)))
                .andExpect(jsonPath("$.last_name", equalTo(LAST_NAME)))
                .andExpect(jsonPath("$.id_user", equalTo(ID)))
                .andExpect(jsonPath("$.image_url", equalTo(IMAGE_URL)))
                .andExpect(jsonPath("$.gender", equalTo(GENDER)))
                .andExpect(jsonPath("$.language", equalTo(LANG)));
    }

    @Test
    public void testCreateUser() throws Exception {
        // given
        UserDTO userDTO = getDTO();

        // when
        when(userService.saveUser(any(UserDTO.class))).thenReturn(userDTO);

        // then
        mockMvc.perform(post(USER_URL)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(userDTO)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.email", equalTo(EMAIL)))
                .andExpect(jsonPath("$.name", equalTo(NAME)))
                .andExpect(jsonPath("$.last_name", equalTo(LAST_NAME)))
                .andExpect(jsonPath("$.id_user", equalTo(ID)))
                .andExpect(jsonPath("$.image_url", equalTo(IMAGE_URL)))
                .andExpect(jsonPath("$.gender", equalTo(GENDER)))
                .andExpect(jsonPath("$.language", equalTo(LANG)));
    }

    @Test
    public void testUpdateUser() throws Exception {
        // given
        UserDTO userDTO = getDTO();
        Principal principal = () -> ID;

        // when
        when(userService.updateUser(anyString(), any(UserDTO.class), any(Principal.class))).thenReturn(userDTO);

        // then
        mockMvc.perform(put(USER_URL+"/"+ID)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(userDTO))
                .principal(principal))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email", equalTo(EMAIL)))
                .andExpect(jsonPath("$.name", equalTo(NAME)))
                .andExpect(jsonPath("$.last_name", equalTo(LAST_NAME)))
                .andExpect(jsonPath("$.id_user", equalTo(ID)))
                .andExpect(jsonPath("$.image_url", equalTo(IMAGE_URL)))
                .andExpect(jsonPath("$.gender", equalTo(GENDER)))
                .andExpect(jsonPath("$.language", equalTo(LANG)));
    }

    @Test
    public void testDeleteUser() throws Exception {
        // given
        Principal principal = () -> ID;

        mockMvc.perform(delete(USER_URL+"/"+ ID)
                .contentType(MediaType.APPLICATION_JSON)
                .principal(principal));

        verify(userService, times(1)).deleteUser(anyString(),any(Principal.class));

    }

    private UserDTO getDTO() {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(EMAIL);
        userDTO.setGender(GENDER);
        userDTO.setId(ID);
        userDTO.setImageUrl(IMAGE_URL);
        userDTO.setLanguage(LANG);
        userDTO.setLastName(LAST_NAME);
        userDTO.setName(NAME);
        return userDTO;
    }
}