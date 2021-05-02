#include <iostream>
#include <string>

std::string greet(std::string name)
{
  return "Hello, " + name + "!";
}

int main()
{
  std::string message(greet("World"));
  std::cout << message << std::endl;
  return 0;
}
