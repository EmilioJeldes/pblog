package cl.ewebs.pblog.api.model;

import cl.ewebs.pblog.domain.Priority;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class TaskDTO {

    private Long id;
    @JsonProperty("task_name")
    private String taskName;
    private String description;
    private int duration;
    private Priority priority;
    private boolean state;
}
