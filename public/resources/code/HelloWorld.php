<?php

function greet(string $name)
{
  return "Hello, $name!";
}

$message = greet("World");
echo $message . "\n";
