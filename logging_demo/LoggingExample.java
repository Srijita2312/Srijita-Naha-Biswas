package logging_demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        int[] userIds = {101, 202, -5, 350, 500};

        for (int userId : userIds) {
            if (userId < 0) {
                logger.error("Invalid user ID encountered: {}", userId);
            } else if (userId >= 400) {
                logger.warn("User ID {} is critically high. Requires admin check.", userId);
            } else if (userId >= 300) {
                logger.warn("User ID {} is above normal threshold.", userId);
            } else {
                logger.info("User ID {} processed successfully.", userId);
            }
        }

        simulateUsernameCheck(null);
        simulateDivision(10, 0);
        simulateDivision(20, 4);

        logger.debug(" End of logging simulation.");
    }

    private static void simulateUsernameCheck(String username) {
        try {
            logger.debug("Checking length of username...");
            int length = username.length();
            logger.info("Username length is {}", length);
        } catch (NullPointerException e) {
            logger.error("Username is null. Cannot get length.", e);
        }
    }

    private static void simulateDivision(int a, int b) {
        try {
            logger.debug("Attempting to divide {} by {}", a, b);
            int result = a / b;
            logger.info("Division result: {} / {} = {}", a, b, result);
        } catch (ArithmeticException e) {
            logger.error("ArithmeticException: Cannot divide {} by {}", a, b, e);
            
         }
   }
}
