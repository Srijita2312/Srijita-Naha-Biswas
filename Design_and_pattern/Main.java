public class Main {
    public static void main(String[] args) {
        Logger logger1=Logger.getInstance();
        Logger logger2=Logger.getInstance();

        logger1.log("FIRST log message");
        logger2.log("SECOND log message");

        if(logger1==logger2){
            System.err.println("Both loggers are equal and Singleton pattern ensured.");
        }
        else{
            System.err.println("Singleton pattern is violated");
        }
    }
    
}