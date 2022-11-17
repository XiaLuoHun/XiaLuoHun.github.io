function Login() {
    console.log("Script loaded successfully ");
    Java.perform(function () {
        var LoginActivity = Java.use("com.example.androiddemo.Activity.LoginActivity")
        LoginActivity.a.overload('java.lang.String', 'java.lang.String').implementation = function (x, y) {
            var result = this.a(x, y)
            console.log("x y result", x, y, result)
            return result
        }
    });
}

function first() {
    Java.perform(function () {
        var FridaActivity1 = Java.use("com.example.androiddemo.Activity.FridaActivity1")
        FridaActivity1.a.implementation = function (x) {
            var result = this.a(x)
            console.log("x result", x, result)
            return "R4jSLLLLLLLLLLOrLE7/5B+Z6fsl65yj6BgC6YWz66gO6g2t65Pk6a+P65NK44NNROl0wNOLLLL="
        }
    });
}

function second() {
    Java.perform(function () {
        var FridaActivity2 = Java.use("com.example.androiddemo.Activity.FridaActivity2")
        FridaActivity2.static_bool_var.value = true

        Java.choose("com.example.androiddemo.Activity.FridaActivity2", {
            onMatch: function (instance) {
                console.log("instance found", instance)
                instance.setBool_var()
            },
            onComplete: function () {
                console.log("search Complete")
            }
        })
    });
}

function third() {
    Java.perform(function () {
        var FridaActivity3 = Java.use("com.example.androiddemo.Activity.FridaActivity3")
        FridaActivity3.static_bool_var.value = true

        Java.choose("com.example.androiddemo.Activity.FridaActivity3", {
            onMatch: function (instance) {
                console.log("instance found", instance)
                instance.bool_var.value = true
                instance._same_name_bool_var.value = true
            },
            onComplete: function () {
                console.log("search Complete")
            }
        })
    })
}

function forth() {
    Java.perform(function () {
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check1.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check2.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check3.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check4.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check5.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.FridaActivity4$InnerClasses").check6.implementation = function () {
            return true
        };
    })
}

function forth2() {
    Java.perform(function () {
        var class_name = "com.example.androiddemo.Activity.FridaActivity4$InnerClasses";
        var InnerClass = Java.use(class_name);
        var all_methods = InnerClass.class.getDeclaredMethods();
        //console.log(all_methods);
        for (var i = 0; i < all_methods.length; i++) {
            var method = all_methods[i];
            //console.log(method.toString());
            var substring = method.toString().substr(method.toString().indexOf(class_name) + class_name.length + 1);
            var finalMethodString = substring.substr(0, substring.indexOf("("));
            console.log(finalMethodString);
            InnerClass[finalMethodString].implementation = function () {
                return true
            };
        }
    })
}

function fifth() {
    Java.perform(function () {
        Java.choose("com.example.androiddemo.Activity.FridaActivity5", {
            onMatch: function (instance) {
                console.log("found instance getDynamicDexCheck", instance.getDynamicDexCheck().$className)
            },
            onComplete: function () {
                console.log("search Complete")
            }
        })

        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                try {
                    if (loader.findClass("com.example.androiddemo.Dynamic.DynamicCheck")) {
                        console.log("Succefully found loader!", loader);
                        Java.classFactory.loader = loader;
                    }
                } catch (error) {
                    console.log("found error " + error)

                }
            },
            onComplete: function () {
                "enum completed!"
            }
        })
        Java.use("com.example.androiddemo.Dynamic.DynamicCheck").check.implementation = function () {
            return true
        };
    })
}

function sixth() {
    Java.perform(function () {
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class0").check.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class1").check.implementation = function () {
            return true
        };
        Java.use("com.example.androiddemo.Activity.Frida6.Frida6Class2").check.implementation = function () {
            return true
        };
    })
}

function sixth2() {
    Java.perform(function () {
        Java.enumerateLoadedClasses({
            onMatch: function (name, handle) {
                if (name.toString().indexOf("com.example.androiddemo.Activity.Frida6.Frida6") >= 0) {
                    console.log("name", name)
                    Java.use(name).check.implementation = function () {
                        return true
                    }
                }
            },
            onComplete: function () {
                console.log("enum Complete")
            }
        })
    })
}

setImmediate(sixth2)