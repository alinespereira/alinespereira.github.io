class HelloWorld {

  private static String greet(String name) {
    return "Hello, " + name + "!";
  }

  public static void main(String[] args) {
    String message = greet("World");
    System.out.println(message);
  }
}
