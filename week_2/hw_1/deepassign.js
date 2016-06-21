(function()
{
    "use strict"

    if (typeof Object.dassign == "function") return

    var isEnumerable = {}.propertyIsEnumerable
    var hasOwnProperty = Object.prototype.hasOwnProperty;


    function includeNested(to,from){  

        Reflect.ownKeys(from).forEach(function(key)
            {
                if (typeof from[key] === 'object'){
                    if (to.hasOwnProperty(key)){
                        to = to[key]
                    } else {
                        var target = Object(to)
                        includeNested(to,from[key])
                    }

                } else {
                    if (isEnumerable.call(from, key))
                    to[key] = from[key]

                }
            })
        
    }


    Object.defineProperty(Object, "dassign",
    {
        value: function dassign(target, sources)
        {
            if (target == null) throw new TypeError

            var to = Object(target)

            for (var index = 1; index < arguments.length ;)
            {
                var from = arguments[index++]
                if (from !== Object(from)) continue
                    includeNested(to,from);


            }

            return to
        },
        writable: true,
        configurable: true
    })
})()
Object.dassign({a: {b: 0}}, {a: {b: 1, c: 2}}, {a: {c: 3}})