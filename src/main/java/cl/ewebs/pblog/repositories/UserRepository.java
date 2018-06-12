package cl.ewebs.pblog.repositories;

import cl.ewebs.pblog.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

}
