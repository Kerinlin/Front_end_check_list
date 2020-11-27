### call,apply,bind 区别

1. 3个函数都能改变this指向，第一个参数用于指定this,未指定this时都默认指向全局window；
2. call和apply绑定this后会立马执行原函数一次，但bind不会，bind会返回绑定this之后的函数；
3. 它们的传参方式不同，call需要立马传入一个参数列表，bind可以分批参入参数列表，apply则需要传入一个参数数组；