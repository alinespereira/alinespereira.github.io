#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *greet(char *name)
{
  char *message = (char *)malloc(strlen("Hello") + strlen(name) + 2);
  strcat(message, "Hello, ");
  strcat(message, name);
  strcat(message, "\n");
  return message;
}

int main()
{
  char *message = greet("World");
  printf("%s", message);
  return 0;
}
