package cl.ejeldes.pblog.api.mappers;

import cl.ejeldes.pblog.api.model.UserDTO;
import cl.ejeldes.pblog.domain.User;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserMapperTest {

    private static final String ID = "123456789";
    private static final String EMAIL = "email@email.com";
    private static final String GENDER = "male";
    private static final String IMAGE_URL = "http://image.com";
    private static final String LANG = "es";
    private static final String NAME = "Emilio";
    private static final String LAST_NAME = "Jeldes";
    private UserMapper mapper = UserMapper.INSTANCE;

    @Test
    public void testDtoToDomain() {
        // given
        UserDTO userDTO = new UserDTO();
        userDTO.setId(ID);
        userDTO.setEmail(EMAIL);
        userDTO.setGender(GENDER);
        userDTO.setImageUrl(IMAGE_URL);
        userDTO.setLanguage(LANG);
        userDTO.setName(NAME);
        userDTO.setLastName(LAST_NAME);

        // when
        User user = mapper.dtoToDomain(userDTO);

        // then
        assertEquals(ID, user.getId());
        assertEquals(EMAIL, user.getEmail());
        assertEquals(GENDER, user.getGender());
        assertEquals(IMAGE_URL, user.getImageUrl());
        assertEquals(LANG, user.getLanguage());
        assertEquals(NAME, user.getName());
        assertEquals(LAST_NAME, user.getLastName());
    }

    @Test
    public void testDomainToDTO() {
        // given
        User user = new User();
        user.setId(ID);
        user.setEmail(EMAIL);
        user.setGender(GENDER);
        user.setImageUrl(IMAGE_URL);
        user.setLanguage(LANG);
        user.setName(NAME);
        user.setLastName(LAST_NAME);

        // when
        UserDTO dto = mapper.domainToDTO(user);

        // then
        assertEquals(ID, dto.getId());
        assertEquals(EMAIL, dto.getEmail());
        assertEquals(GENDER, dto.getGender());
        assertEquals(IMAGE_URL, dto.getImageUrl());
        assertEquals(LANG, dto.getLanguage());
        assertEquals(NAME, dto.getName());
        assertEquals(LAST_NAME, dto.getLastName());
    }

}