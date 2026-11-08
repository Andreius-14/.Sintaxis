local co = coroutine.create(function()
    print("Primera ejecución")

    coroutine.yield()

    print("Segunda ejecución")
end)

coroutine.resume(co)
coroutine.resume(co)
