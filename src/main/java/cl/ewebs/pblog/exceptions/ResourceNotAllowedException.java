package cl.ewebs.pblog.exceptions;

public class ResourceNotAllowedException extends RuntimeException {
    public ResourceNotAllowedException() {
        super();
    }

    public ResourceNotAllowedException(String message) {
        super(message);
    }

    public ResourceNotAllowedException(String message, Throwable cause) {
        super(message, cause);
    }

    public ResourceNotAllowedException(Throwable cause) {
        super(cause);
    }

    protected ResourceNotAllowedException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
