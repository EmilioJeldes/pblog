package cl.ejeldes.pblog.repositories;

import cl.ejeldes.pblog.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

}
