object Hello {
  def greet(name: String): String = {
    s"Hello, $name!"
  }

  def main(args: Array[String]): Unit = {
    val message: String = greet("World")
    println(message)
  }
}
