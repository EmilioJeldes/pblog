package cl.ewebs.pblog.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String taskName;

    @Lob
    private String description;
    private int duration;

    @Enumerated(value = EnumType.STRING)
    private Priority priority;
    private boolean state;

}
