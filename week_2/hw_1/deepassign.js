(function()
{
    "use strict"

    if (typeof Object.dassign == "function") return

    var isEnumerable = {}.propertyIsEnumerable
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    Object.defineProperty(Object, "dassign",
    {
        value: function dassign(target, sources)
        {
            if (target == null) throw new TypeError
            
            var to = Object(target)

            for (var index = 1; index < arguments.length ;index++)
            {
                var from = arguments[index]
                if (from !== Object(from)) continue

                includeNested(to,from);
            }

            return to
        },
        writable: true,
        configurable: true
    })



    function includeNested(to,from){  
        console.log(from)

        Reflect.ownKeys(from).forEach(function(key)
            {
                if (typeof from[key] === 'object'){
                    if (to.hasOwnProperty(key)){
                        to = to[key]
                    } else {
                        to[key] = from[key]
                    }
                    includeNested(to,from[key])
                } else {
                    if (isEnumerable.call(from, key))
                    to[key] = from[key]

                }
            })
        
    }
})()
Object.dassign({a: {b: 0}}, {b: {c: 55}})