function greet(name::String)
  return "Hello, " * name * "!"
end

message = greet("World")
println(message)
