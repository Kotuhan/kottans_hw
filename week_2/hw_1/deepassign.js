(function()
{
    "use strict"

    if (typeof Object.dassign == "function") return

    var isEnumerable = {}.propertyIsEnumerable
    var hasOwnProperty = Object.prototype.hasOwnProperty;

<<<<<<< HEAD
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
=======

    function includeNested(to,from){  
>>>>>>> bfd0437ce77e7db43d302d9fa1084658f6a02b79

        Reflect.ownKeys(from).forEach(function(key)
            {
                if (typeof from[key] === 'object'){
                    if (to.hasOwnProperty(key)){
                        to = to[key]
                    } else {
<<<<<<< HEAD
                        to[key] = from[key]
                    }
                    includeNested(to,from[key])
=======
                        var target = Object(to)
                        includeNested(to,from[key])
                    }

>>>>>>> bfd0437ce77e7db43d302d9fa1084658f6a02b79
                } else {
                    if (isEnumerable.call(from, key))
                    to[key] = from[key]

                }
            })
        
    }
<<<<<<< HEAD
})()
Object.dassign({a: {b: 0}}, {b: {c: 55}})
=======


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
>>>>>>> bfd0437ce77e7db43d302d9fa1084658f6a02b79
