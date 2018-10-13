package cl.ejeldes.pblog.bootstrap;

import cl.ejeldes.pblog.api.model.TaskDTO;
import cl.ejeldes.pblog.domain.Priority;
import cl.ejeldes.pblog.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TaskBootstrap implements CommandLineRunner {

    private final TaskService taskService;

    @Autowired
    public TaskBootstrap(TaskService taskService) {
        this.taskService = taskService;
    }

    @Override
    public void run(String... args) throws Exception {
        insertTasks();
    }

    public void insertTasks() {
        TaskDTO taskDTO1 = new TaskDTO();
        taskDTO1.setTaskName("Crear Wireframes");
        taskDTO1.setState(true);
        taskDTO1.setPriority(Priority.HIGH);
        taskDTO1.setDuration(3);
        taskDTO1.setDescription("Como cliente necesito los wireframes de la app para estructurar su funcionalidad");

        TaskDTO taskDTO2 = new TaskDTO();
        taskDTO2.setTaskName("Elegir Guias de estilo");
        taskDTO2.setState(true);
        taskDTO2.setPriority(Priority.HIGH);
        taskDTO2.setDescription("Como desarrollador necesito las guias de estilo para maquetar la página");
        taskDTO2.setDuration(4);

        TaskDTO taskDTO3 = new TaskDTO();
        taskDTO3.setDuration(2);
        taskDTO3.setTaskName("Modela base de datos");
        taskDTO3.setPriority(Priority.REALLY_HIGH);
        taskDTO3.setDescription("Como desarrollador necesito modelar la base de datos para estructurar la aplicación");
        taskDTO3.setState(true);

        TaskDTO taskDTO4 = new TaskDTO();
        taskDTO4.setTaskName("Crear Tarea");
        taskDTO4.setPriority(Priority.LOW);
        taskDTO4.setState(true);
        taskDTO4.setDescription("Como cliente necesito agregar tareas para estructurar mi proyecto con metodología scrum");
        taskDTO4.setDuration(5);

        taskService.saveTask(taskDTO1);
        taskService.saveTask(taskDTO2);
        taskService.saveTask(taskDTO3);
        taskService.saveTask(taskDTO4);
    }

}
