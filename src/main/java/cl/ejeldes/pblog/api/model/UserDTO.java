package cl.ejeldes.pblog.api.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class UserDTO {

    @JsonProperty("id_user")
    private String id;

    private String email;
    private String name;

    @JsonProperty("last_name")
    private String lastName;

    @JsonProperty("image_url")
    private String imageUrl;

    private String gender;
    private String language;
}
